const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { decodeToken } = require('./middleware/decodeToken');
const { Validation } = require('./middleware/validation');
const { loginSchema, getSuggestionsSchema } = require('./schema');
const { users } = require('./MOCK/users.json');
const { getUserDataByRole } = require('./services/getUserDataByRole');
const { PORT, SECRET, EXPIRE_TOKEN_TIME, API_URL } = require('./server.config');


app.use(cors());
app.options('*', cors());
app.use(express.json());


app.post('/login', Validation(loginSchema),  async (req, res) => {   
    try{ 
        const { username, password } = req.body;
        const user = users.find(u => u.username === username && u.password === password);        
        if(!user){
            return res.status(404).json({success: false, token: null, err: 'User not found' });
        }
        console.info(`user found: ${user.username}`)

        const token = jwt.sign(user, SECRET, { expiresIn: EXPIRE_TOKEN_TIME });            
        return res.status(200).json({success: true, token, err: null });

    } catch(err) {
        console.log(err)
        res.status(500).json({success: false, token:null, err: err.message })
        
    }
});


app.post('/getSuggestions', Validation(getSuggestionsSchema), decodeToken,  async (req, res) => {   
    try{ 

        const { role } = req.decoded;
        const { searchValue } = req.body;
        console.info(`search name value: ${ searchValue }, user role: ${ role }`)

        const { data, status } = await axios.get(`${API_URL}/?name=${searchValue}`);
        
        const suggestions = getUserDataByRole(data, role)

        return res.status(status).json({
             err: null,
             suggestions 
        });

    } catch(err) {
        
        const { status, data } = err?.response ?? {}
        const statusCode = status ?? 500
        const errMsg = data?.error ?? err.message;
        console.error(err.message)

        res.status(statusCode).json({
             err: errMsg,
             suggestions: []
        })
        
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


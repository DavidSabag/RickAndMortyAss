import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { loginService } from '../../services/loginService';
import { useEffect, useState } from 'react';
import { LoginTypes } from '../../types';


const Login = ({setLoginSuccess}: LoginTypes): JSX.Element => {
  
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {        
        const token = sessionStorage.getItem('session-token')
        setLoginSuccess(!!token)
      
    },[]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
            event.preventDefault();
            const data: FormData = new FormData(event.currentTarget); 
            if(!data.get('username') || !data.get('password')){
                return setError('Login fields are required')
            }
            
            setIsLoading(true)
            const {err, success, token} =  await loginService(data)       
            setIsLoading(false)

            if(err){                
                return setError(err)
            }

            setLoginSuccess(!!success)
                        
            // @ts-ignore
            sessionStorage.setItem("session-token", token);
            
  };

  return (    
      <Container component="main" maxWidth="xs">        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
             <ButtonContainer>
                {
                    isLoading? <CircularProgress className='loader'/> : 
                    <div className='container'>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button> 
                        <label className='err-msg'>{error}</label>
                    </div>
                }   
              </ButtonContainer>
            

          </Box>
        </Box>        
      </Container>    
  );
}

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    .loader{
        margin-top: 30px;
    }
    .container{
        display: flex;
        flex-direction: column;
        width: 100%
    }
    .err-msg {
        width: 100%;
        display: flex;       
        justify-content: center;    
        font-weight: 500;
        color: darkred
    }

`;

export default Login
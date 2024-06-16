# Running Instructions

1. Running via docker, cd into main diractory then run -   `docker-compose up`.

2. Running locally: <br/>
    2.1. cd into backend dir and run `npm install`  then `node server.js`. <br/>
    2.2. cd into frontend dir and run `npm install`  then `npm start`. <br/>


<br />
<br />


# Clarifications   
1. You can login and test the app with 2 users located in backend/MOCK/users.json <br />

    * Username: <strong>AegonT123</strong>, Password: <strong>Ag1234</strong> (admin)
    * Username: <strong>JaimeL11</strong>, Password: <strong>Jl1242</strong> (non-admin)

2. Autocomplete will start after the 2nd charecter. <br />

3. Non-admin users will see only <strong>image</strong> and <strong>name</strong> field from /api/character, admin users will see also:
<strong>id, species, gender, status, origin</strong>.

import styled from '@emotion/styled';
import { useState } from 'react';
import Login from './components/login';
import SearchCharacters from './components/searchCharacters'
import ShowCharacters from './components/showCharacters'



function App(): JSX.Element {
 
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')    

  
  return (
    <AppStyled>
      {
        loginSuccess? 
          <DataDisplayStyled>
            <SearchCharacters setLoginSuccess={setLoginSuccess} inputValue={inputValue} setInputValue={setInputValue} />
            <ShowCharacters inputValue={inputValue} setLoginSuccess={setLoginSuccess}/>
          </DataDisplayStyled>:
        <Login setLoginSuccess={setLoginSuccess} />
      }
      
    </AppStyled>
  );
}

const DataDisplayStyled = styled.div`
    display: flex;  
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    @media (max-width: 1024px){
      margin-top: 0;
    }

`;
const AppStyled = styled.div`
 
`


export default App;

import styled from '@emotion/styled';
import { useSuggestions } from '../../hooks/useSuggestions';
import {ShowCharactersType} from '../../types';
import Character from './Character';

const ShowCharacters = ({inputValue}: ShowCharactersType): JSX.Element => {
    
    const {data, isLoading} = useSuggestions(inputValue)               
        return (
          <ShowCharactersStyled>
            {
                !isLoading && data?.suggestions?.map(sugg => <Character {...sugg}/>)              
            }
             {data?.err &&<h1> {data?.err}</h1>}                     
            </ShowCharactersStyled>
        );      
};

const ShowCharactersStyled = styled.div`
        
    margin: 50px auto;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 800px;
    overflow: auto;
 
`;


export default ShowCharacters;
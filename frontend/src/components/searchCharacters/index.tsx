import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { useSuggestions } from '../../hooks/useSuggestions';
import { Suggestion, SearchCharactersType } from '../../types';

const SearchCharacters = ({setInputValue, inputValue}: SearchCharactersType): JSX.Element => {
    
    const {data, isLoading} = useSuggestions(inputValue)    
    const CustomPaper = styled(Paper)(({theme}) => ({    
      ...theme,
      opacity: 0.8,
      maxHeight: '200px',
      overflow: 'auto'
    }));   
        
        return (
          <SearchCharactersStyled>
              <Autocomplete
                onInputChange={(_, value) => setInputValue(value)}                   
                sx={{ width: 350 }}
                PaperComponent={CustomPaper}                
                options={data?.suggestions?.map((sugg: Suggestion) => sugg.name) || []}
                renderInput={(params) => (                  
                  <TextField 
                      {...params} 
                      label="Search Characters" 
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position='end'>
                            {isLoading && <CircularProgress  />}
                          </InputAdornment>
                        ),
                      }} 
                      
                  />
                )}                                      
                value={inputValue}
              />
            </SearchCharactersStyled>
          );      
};

const SearchCharactersStyled = styled.div`
    margin-top: 10px;

    .MuiCircularProgress-root{
      width: 30px !important; 
      height: 30px!important; 
    }
    .MuiInputBase-root{
      padding-right: 25px !important;
    }    

`;


export default SearchCharacters;
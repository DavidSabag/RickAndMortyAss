import { API_BASE_URL } from "../endpoints";
import { Suggestions } from '../types';


async function suggestionsService(searchValue: string): Promise<Suggestions> {
    try {        
        const options: Object = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: sessionStorage.getItem('session-token')
            },
            body: JSON.stringify({searchValue})
        };
        
        const res: Response = await fetch(`${API_BASE_URL}/getSuggestions`, options);
        
            
        const { suggestions, err } = await res.json();
    
        return {
            suggestions,
            err,
            
        }

    } catch (err: any) {        
        console.error(`Error in suggestionsService: ${err.message}`)        
        return { 
            suggestions: [],
            err: err.message,            
        }
    }
}


export { suggestionsService };
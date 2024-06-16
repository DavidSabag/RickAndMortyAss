import { useQuery } from '@tanstack/react-query';
import { suggestionsService } from '../services/suggestionsService';
import { Suggestions } from '../types';



export const useSuggestions = (searchText: string): {data?: Suggestions, isLoading?: boolean, isFetching?: boolean} => {
    
    const {data, isLoading, isFetching } = useQuery({
        queryKey: ['searchText',searchText],    
        queryFn: () => suggestionsService(searchText),
        enabled: searchText.length > 2, // start searching after 3 charecters        
        staleTime: 10 * 1000 // refresh cache after 10 sec
        
    });

    //@ts-ignore
    const name: string  = data?.err?.name || '';
    
    if(["TokenExpiredError", "JsonWebTokenError"].includes(name)) { // back to login page if bad token        
        sessionStorage.removeItem('session-token')        
        window.location.reload();
        return {};
        
    }

    return {
        data: {
            suggestions: data?.suggestions || [],
            err: data?.err
        },
        isLoading,
        isFetching
    }
}
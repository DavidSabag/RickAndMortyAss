import { API_BASE_URL } from "../endpoints";
import { LoginReturnType } from '../types'



async function loginService(formdata: FormData): Promise<LoginReturnType> {
    try {
        const options: Object = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: formdata.get('username'),
                password: formdata.get('password')
            })
        };
        
        const res: Response = await fetch(`${API_BASE_URL}/login`, options);
        
        if (!res.ok) throw new Error(`Error fetching data with status: ${res.statusText}`);
        
        const data = await res.json();
        return data
        
    } catch (err: any) {
        
        console.error(`Error in loginService: ${err.message}`)        
        return {            
            err: err.message
        }
    }
}


export { loginService };
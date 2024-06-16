interface Suggestion {
    name: string,
    image: string,
    id?: string,
    species?: string,
    gender?: string,
    status?: string,
    origin?: string,

};


interface Suggestions {
    suggestions: Suggestion[] | [],
    err?: string | null
    
};

interface LoginReturnType {
    err: string,
    success?: boolean,
    token?: string
}

interface LoginTypes  {
    setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>,

}

interface SearchCharactersType extends LoginTypes {
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    inputValue: string
}

interface ShowCharactersType extends LoginTypes {
    inputValue: string
}



export type {
    Suggestion,
    Suggestions,
    LoginReturnType,
    LoginTypes,
    SearchCharactersType,
    ShowCharactersType
}
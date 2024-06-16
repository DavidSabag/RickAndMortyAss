const getUserDataByRole = (data, role) => {

    return data?.results?.map(sugg => ({                    
        name: sugg.name,
        image: sugg.image,            
        ...(role === 'admin' && {        
            id: sugg.id,
            species: sugg.species,
            gender: sugg.gender,
            status: sugg.status,
            origin: sugg.origin.name,
        })

        
    })) ?? []


}

module.exports = { getUserDataByRole }
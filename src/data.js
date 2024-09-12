const url = "http://localhost:3000"

export const getbanner_hero = async () => {
    try {
        const res = await fetch(`${url}/banner_hero`);
        const data = await res.json()

        return data
    } catch (error) {
        return error.message
    }
}

export const getnew_prod = async () =>{
    try {
        const res = await fetch(`${url}/new_prod`);
        const data = await res.json()

        return data
    } catch (error) {
        return error.message
    }
}

export const getnovin_prod = async () => {
    try {
        const res = await fetch(`${url}/novin_prod`);
        const data = await res.json()

        return data
    } catch (error) {
        return error.message
    }
}


export const getreccomendation_prod = async () => {
    try {
        const res = await fetch(`${url}/reccomendation_prod`);
        const data = await res.json()

        return data
    } catch (error) {
        return error.message
    }
}



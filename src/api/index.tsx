import axios from "axios"


export const dataApi = async (api: string) => {
    await axios.get(api)
    .then((res) => {
        const data = res.data
        return data
    })
}
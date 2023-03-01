import axios from 'axios'


const baseUserUrl = ('http://localhost:4000/api/v1/users')


export const getUserRequest = async (id:any) =>{
    return await axios.get(baseUserUrl + `/${id}`)

 }
import axios from 'axios'


const baseUserUrl = ('http://localhost:4000/api/v1/users')

const loginUrl = ("http://localhost:4000/api/v1/auth/login")

export const getUsersRequest = async () => {
    return axios.get(baseUserUrl);
}

export const postUserRequest = async (user: Object) => {
    return axios.post(baseUserUrl, user);
}

export const authUserRequest = async (auth: Object) => {
    return axios.post(loginUrl, auth);
}
import axios from "axios";

axios.defaults.baseURL = 'https://6464b816127ad0b8f8a612ea.mockapi.io/';


export const getUsers = data => axios.get('/users', data);

export const updateUser = data => axios.put(`/users/${data.id}`, data);

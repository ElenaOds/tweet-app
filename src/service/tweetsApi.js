import axios from "axios";

// const tweetsApi = axios.create({
//     baseURL: 'https://6464b816127ad0b8f8a612ea.mockapi.io/',
//   });
axios.defaults.baseURL = 'https://6464b816127ad0b8f8a612ea.mockapi.io/';


export const getUsers = data => axios.get('/users', data);

export const updateUser = data => axios.put(`/users/${data.id}`, data);

//    export const getTweets = async () => {
//     const { data } = await tweetsApi.get(`/users`);
//     return data;
//   };


//   export const UpdateTweets = async () => {
//     const { data } = await tweetsApi.post(`users/id`, {
//       params: {
//         page: 1,
//       },
//     });
//     return data;
//   };


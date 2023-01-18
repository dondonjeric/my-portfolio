import axios from 'axios';
const BASE_URL = 'http://localhost:8084/grocery';


// class AccountAxios{
//     getAllAccount = () => {
//         return axios.create({
//             baseURL: BASE_URL,
//             headers: {
//             }
//         });
//     }
// }

// export default AccountAxios;

// export default axios.create({
//     baseURL: BASE_URL,
//     headers: {
//     }
// });


export const getAll =
    axios.create({
        baseURL: BASE_URL,
        headers: {
        }
    })

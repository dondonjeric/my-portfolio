import axios from 'axios';
const BASE_URL = 'http://localhost:8083/accounts';


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

export function create(props){
    props.url = BASE_URL;
    axios(props);
}

export function transaction(props) {
    props.url = BASE_URL;
    axios(props)

}
// import axios from 'axios';

// const ACCOUNT_URL = "http://localhost:8083/accounts";

// class AccountService {

//     async getAccounts() {
//         var config = {
//           method: 'get',
//           url: ACCOUNT_URL,
//           headers: { }
//         };
    
//         return await axios(config);
//     }

//     createAccount(props){
//         var data = JSON.stringify({
//             "name":props.name,
//             "type": props.type
//           });
          
//           var config = {
//             method: 'post',
//             url: ACCOUNT_URL,
//             headers: { 
//               'Content-Type': 'application/json'
//             },
//             data : data
//           };
          
//           axios(config);
          
//     }
// }

// export default new AccountService();

import {getAll, create, transaction} from './AccountAxios';
import AxiosTemplate from './AxiosTemplate';


class AccountService{

  getAllAccounts = () => {
    const [request, error, loading, refetch] = AxiosTemplate({
      axiosInstance: getAll,
      method: 'GET',
      url: '/',
      requestConfig: {
        header: {
  
        }
      }
    });
    return [request, error, loading, refetch];
  }

  createAccount = (props) => {

    let data = JSON.stringify({
        "name":props.name,
        "type": props.type
      });
      
      let config = {
        method: 'post',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      create(config);  
  }

  transaction = (props) => {
    let value = JSON.stringify({
      "id": props.id,
      "type": props.type,
      "amount": props.amount
    });
    let config = {
      method: 'put',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : value
    }
    transaction(config);
  }
}

export default new AccountService();
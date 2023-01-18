import React from "react";

import AccountTransactionList from './AccountTransactionList';
import './AccountTabTwo.css';
import TransactionService from "../../../connection/TransactionService";

const AccountTabTwo = () => {

    const [request, error, loading, refetch] = TransactionService.getAllAccounts();
    // console.log(request);
    let tableContent = request.length > 0 ?
    <AccountTransactionList data={request}/>: "There is currently no data found!";
    let tabConcent = 
        <div>
            {loading && <p>Loading...</p>}
            {!loading && error && <p className="errMsg">{error}</p>}
            {!loading && !error && <div>{ tableContent }</div>}
        </div>
    return (
        <div>
            {tabConcent}
        </div>
    );
}

export default AccountTabTwo;
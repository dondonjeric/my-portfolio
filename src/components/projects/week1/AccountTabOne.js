import React, { useEffect, useState } from "react";
import AccountAdd from "./AccountAdd";

import AccountList from "./AccountList";

import AccountService from "../../../connection/AccountService";

import './AccountTabOne.css';
import TransactionService from "../../../connection/TransactionService";
const AccountTabOne = () => {
    const [addNewAccount, setAddNewAccount] = useState(false);
    const showAddNewAccountForm = () => {
        setAddNewAccount(true);
    }

    // let tabOneContent = accounts.length > 0 ? 
    // <AccountList data={accounts} /> : "There is currently no data found!";
    
    const [request, error, loading, refetch] = AccountService.getAllAccounts();
    // console.log(request);
    const onTransactionMade = (values) => {
        AccountService.transaction(values);
        setTimeout(() => {
            refetch();
        }, 500);
    }
    console.log(request);
    let tableContent = request.length > 0 ? 
    <AccountList data={request} transact={onTransactionMade}/> : "There is currently no data found!";
    let tabOneContent = 
        <div>
            {loading && <p>Loading...</p>}
            {!loading && error && <p className="errMsg">{error}</p>}
            {!loading && !error && request && <div>{ tableContent }</div>}
            {!loading && !error && !request && <p>No data</p>}
        </div>
    const onSubmitClick = (val) => {
        AccountService.createAccount(val);
        setAddNewAccount(false);
        setTimeout(() => {
            refetch();
        }, 1000);
    }

    const onCancelClick = () => {
        setAddNewAccount(false);
    }



return (
        <div>
            { tabOneContent }
            <br />
            {!addNewAccount && <button onClick={showAddNewAccountForm}>Add New Account</button>}
            {addNewAccount && 
            <div className="overlay">
                <AccountAdd AddAccountSubmit={onSubmitClick}AddAccountCancel={onCancelClick}/>
            </div>}
        </div>
    );
}

export default AccountTabOne;
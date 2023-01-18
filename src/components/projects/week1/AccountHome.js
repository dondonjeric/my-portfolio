import React, { useEffect, useState } from "react";


import './AccountHome.css'
import AccountTab from "./AccountTab";
import AccountService from "../../../connection/AccountService";

const AccountHome = () => {
    return (
        <div className="account-home">
            <h1>Accounts</h1>
            <p>Create a Java program that can create a bank account and perform transactions on the account. 
            {/* <br/>Added points:<br/> */}
            </p>
            {/* <ul>
                <li>Implemented as a Springboot application</li>
                <li>Added a database for both accounts created and transactions made</li>    
                <li>(TBD) Add sorting features when a column head is click</li>    
                <li>(TBD) Add pagination to only load 50 accounts/transactions and add a next page button to load the next 50 accounts/transactions and so on..</li>    
            </ul> */}
            <div className="account-home__container">
               
                {
                    <AccountTab/>
                }
                {/* <AccountAdd />
                <div className="account-home__top">
                    <button type="button">Add New Account</button>
                    <button type="button">Show all transactions</button>
                </div>
                <div className="account-home__body">
                    <AccountList />
                </div> */}
            </div>
        </div>
    );
}

export default AccountHome;
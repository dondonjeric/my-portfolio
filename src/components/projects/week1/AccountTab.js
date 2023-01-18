import React, { useEffect, useState } from "react";

import './AccountTab.css';
import AccountTabOne from "./AccountTabOne";
import AccountTabTwo from "./AccountTabTwo";
import AccountService from "../../../connection/AccountService";
import TransactionService from "../../../connection/TransactionService";

const AccountTab = () => {
    const [toggleTab, setToggleTab] = useState(1);

    const onClickTabOne = () => {
        setToggleTab(1);
    }
    const onClickTabTwo = () => {
        setToggleTab(2);
    }

    return (
        <div className="account-tab__container">
            <div className="account-tab__tab-container">
                <button className={toggleTab === 1 ? "account-tab-btn account-tab__tab account-tab__active-tab": "account-tab-btn account-tab__tab"}
                onClick={onClickTabOne}>
                    Account
                </button>
                <button className={toggleTab === 2 ? "account-tab-btn account-tab__tab account-tab__active-tab": "account-tab-btn account-tab__tab"}
                onClick={onClickTabTwo}>
                    Transaction
                </button>
            </div>
            <div className="account-tab__content-container">
                <div className={toggleTab === 1 ? "account-tab__content account-tab__active-content": "account-tab__content"}>
                    <AccountTabOne/>
                </div>
                <div className={toggleTab === 2 ? "account-tab__content account-tab__active-content": "account-tab__content"}>
                    <AccountTabTwo  />
                </div>
            </div>
        </div>
    );
}
export default AccountTab;
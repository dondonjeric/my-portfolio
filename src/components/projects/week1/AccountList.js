import React, { useState } from "react";
import AccountService from "../../../connection/AccountService";


import './AccountList.css';
import AccountTransaction from "./AccountTransaction";

const AccountList = (props) => {
    const [currentId, setCurrentId] = useState('');
    const [transaction, setTransaction] = useState(false);
    console.log(props.data);
    const [accounts, setAccounts] = useState('');

    const showTransaction = (id) => {
        setTransaction(!transaction);
        setCurrentId(id);
        console.log(id);
    }
    if(transaction) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const onClose = (props) => {
        setTransaction(props.modal)
    }

    const onReturn = (values) => {
        // props.transact.id = currentId;
        // console.log(props);
        props.transact(values);

    }
    return (
        <div className="account-list__container">
            <table className="account-list__table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Account Number</td>
                        <td>Balance</td>
                        <td>Minimum Balance</td>
                        <td>Penalty</td>
                        <td>Transaction Charge</td>
                        <td>Interest Charge</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(data => (
                            <tr key ={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.acctNumber}</td>
                                <td>{data.balance}</td>
                                <td>{data.minimumBalance}</td>
                                <td>{data.penalty}</td>
                                <td>{data.transactionCharge}</td>
                                <td>{data.interestCharge}</td>
                                <td><a href="#" onClick={() => {
                                    showTransaction(data.id);
                                }}>Transact</a></td>
                            {/* }}>Transact</a> | <a href="#">Update</a> | <a href="#">Delete</a></td> */}
                            </tr>
                            ))
                        
                        
                        
                    }
                </tbody>
            </table>
            {
            transaction && 
            <div className="modal">
                <div className="overlay">
                    <AccountTransaction return={onReturn} id={currentId} modal={onClose}/>
                </div>
            </div>
            }
        </div>
    );
}

export default AccountList;
import React from "react";


import './AccountTransactionList.css';

const AccountTransactionList = (props) => {

    const format = (data) => {
        let date = new Date(data);
        return date.toLocaleString();
    }

    return (
        <div>
            <h1>AccountTransactionList</h1>
            <table className="account-list__table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Account ID</td>
                        <td>Transaction Type</td>
                        <td>Balance</td>
                        <td>Amount</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(data => 
                            (<tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.accountId}</td>
                                <td>{data.type}</td>
                                <td>{data.balance}</td>
                                <td>{data.amount}</td>
                                <td>{format(data.date)}</td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AccountTransactionList;
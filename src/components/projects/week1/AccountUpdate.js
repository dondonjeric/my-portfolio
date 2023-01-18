import React from "react";

import './AccountUpdate.css';


const AccountUpdate = () => {
    return (
        <form>
        <label>Name: </label><input type="text" />
        <label>Account type: </label>
        <select>
            <option>Regular account</option>
            <option>Credit account</option>
            <option>Checking account</option>
        </select>
        <label>Balance: </label><input type="number" />
        </form>
    );
}


export default AccountUpdate;
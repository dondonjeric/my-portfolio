import React, { useEffect, useRef, useState } from "react";

import './AccountTransaction.css';

const AccountTransaction = (props) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('deposit');

    let menuRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                props.modal(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown",handler )
        }
    });
    

    const typChangeHandler = (event) => {
        let value = event.target.value;
        console.log(value);
        setType(value);
    }

    const amountChangeHandler = (event) => {
        let value = event.target.value;
        value = value >= 0 ? value: 0;
        console.log(value);
        setAmount(value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const transact = {
            id: props.id,
            type: type,
            amount: amount
        }
        props.return(transact)
        props.modal(false);
    }

    const close = () => {
        props.modal(false);
    }
    return (
        <div ref={menuRef} className="modal-content">
            <form onSubmit={onSubmit.bind(this)}>
                {/* <select>
                    <option>Deposit</option>
                    <option>Withdraw</option>
                </select> */}
                <input type="radio" defaultChecked name="type" value="deposit" onChange={typChangeHandler} required/><label>Deposit</label>
                <input type="radio" name="type" value="withdraw" onChange={typChangeHandler}required/><label>Withdraw</label>
                <br />
                <label>Amount: </label>
                <input type="number" min="0" step="50" value={amount} onChange={amountChangeHandler} required/>
                <br/>
                <input type="submit" onClick={onSubmit} value="Submit" />
                <button type="button" onClick={close}>Cancel</button>
            </form>
        </div>
    );
}


export default AccountTransaction;
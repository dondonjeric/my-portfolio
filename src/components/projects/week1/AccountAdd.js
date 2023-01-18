import React, { useEffect, useRef, useState } from "react";

import './AccountAdd.css';


const AccountAdd = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('regular');

    const AddAccountSubmit = () => {
        const data = {
            name: name,
            type: type
        }
        props.AddAccountSubmit(data);

    }

    const AddAccountCancel = () => {
        props.AddAccountCancel();
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const typeChangeHandler = (event) => {
        setType(event.target.value);
    }

    let menuRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                props.AddAccountCancel();
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown",handler )
        }
    });
    return (
        <div ref={menuRef} className="modal-content">
            <form>
                <label>Name: </label><input type="text" name="name" id="name" value={name} onChange={nameChangeHandler}/><br/>
                <label>Account type: </label>
                <select name="type" id="type" onChange={typeChangeHandler}>
                    <option value="regular">Regular Account</option>
                    <option value="interest">Interest Account</option>
                    <option value="checking">Checking Account</option>
                </select>
                <br />
                <button type="button" onClick={AddAccountSubmit}>Submit</button>
                <button type="button" onClick={AddAccountCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default AccountAdd;
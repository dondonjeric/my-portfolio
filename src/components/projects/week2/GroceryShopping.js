import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GroceryService from "../../../connection/GroceryService";
import GroceryAdd from "./GroceryAdd";

import './GroceryShopping.css';

const GroceryShopping = () => {
    let tempAmount = [];

    const [add, setAdd] = useState(false);
    const [request, loading, error, refetch] = GroceryService.getAllGroceries();
    for(let i = 0; i < request.length; i++){
        tempAmount.push(1);
    }

    const [currentId, setCurrentId] = useState('')
    const [itemAmount, setItemAmount] = useState(false);
    const [amount, setAmount] = useState(tempAmount);
    const [cartItems, setCartItems] = useState([]);
    // console.log(request.length);

    // sort grocery items base on category
    request.sort((a,b) => a.category > b.category ? -1: 1);

    const showAddGrocery = () => {
        setAdd(true);
    }

    const onSubmitClick = (values) => {
        console.log(values);
        setAdd(false);
    }

    const onCancelClick = () => {
        setAdd(false);
    }

    useEffect(() => {
        setAmount(tempAmount);
    }, []);



    const onChangeAmount = (e) =>{
        // setAmount();
        amount[e.target.name] = Number(e.target.value);
        let temp = amount[e.target.name];
        console.log(temp);
    }

    const onItemAdd = (i) => {
        let newCartItem = {
            name: request[i].name,
            price: request[i].price,
            quantity: amount[i] 
        }
        request[i].amount = request[i].amount - amount[i];
        console.log(request[i]);
        console.log(newCartItem);
    }

    const pieces = (element, amount) => {
        console.log(amount);
        let temp = [];
        for(let i = 1; i <= amount; i++){
             temp.push(i);
        }
        let val =
            <select name={element} onChange={onChangeAmount}>
            {
                temp.map(i => (
                    <option key={i}value={i}>{i}</option>
                ))
            }
            </select>
        return val;
    }

    const goToCart = () => {
    }


    return (
        <div className="grocery-shopping__container">
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Unit</td>
                        <td>Category</td>
                        <td>Quantity</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        request.map((data,i) => (
                            <tr key={data.name}>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.unit}</td>
                                <td>{data.category}</td>
                                <td>
                                    {
                                        pieces(i, data.amount)
                                    }
                                </td>
                                <td>
                                    <button type="button" onClick={() => onItemAdd(i)}>Add to Cart</button>
                                </td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <Link to="/grocery">Go to cart</Link>
            
            {/* {!add && <button onClick={showAddGrocery}>Add new grocery</button>}
            {add && 
            <div className="modal">
                <div className="overlay">
                    <GroceryAdd onSubmit={onSubmitClick}onCancel={onCancelClick}/>
                </div>
            </div>
            } */}
            {
                // showItemAmountUI
            }
        </div>
    );
}

export default GroceryShopping;


    // let menuRef = useRef();
    // useEffect(() => {

    // }, [tempAmount]);
    // useEffect(() => {
    //     let handler = (event) => {
    //         if(!menuRef.current.contains(event.target)){
    //             setItemAmount(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handler);

    //     return () => {
    //         document.removeEventListener("mousedown",handler )
    //     }
    // }, []);

    // const showItemAmountUI = itemAmount ?
    //     <div className="modal">
    //         <div className="overlay">
    //             <form ref={menuRef} className="modal-content">
    //                 <label>Input amount:</label><input type="number" /><br />
    //                 <button type="button" onClick={onSubmitItemAmountInput}>Submit</button>
    //                 <button type="button:" onClick={onCancelItemAmountInput}>Cancel</button>
    //             </form>
    //         </div>
    //     </div>
    //     :
    //     "";
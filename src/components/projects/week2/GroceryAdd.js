import React, { useEffect, useRef, useState } from "react";

const GroceryAdd = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [unit, setUnit] = useState('');
    const [unitList, setUnitList] = useState([]);
    // const [disableUnit, setDisableUnit] = useState(true);
    const [amount, setAmount] = useState('');
    const [categoryList, setCategoryList] = useState(["Meat/Poultry/Seafood", "Pantry", "Snacks"]);


    let fakeUnit = [];

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value);
    }

    const onChangeCategory = (event) => {
        const value = event.target.value;
        setCategory(value);
        if(value === 'Meat/Poultry/Seafood'){
            fakeUnit = ['pack', 'kg'];
            setUnitList(['pack', 'kg'])
        }else if(value === "Pantry" || value === "Snacks"){
            fakeUnit = ['pc'];
            setUnitList(['pc'])
        }
        else {
            setUnitList([])

        }
    }

    const onChangeUnit = (event) => {
        setUnit(event.target.value);
    }

    const onChangeAmount = (event) => {
        setAmount(event.target.value);
    }

    const onSubmitClick = () => {
        if(name === '' || price === '' || category === '' || unit === '' || amount === ''){
            
            return;
        }
        const obj = {
            name: name,
            price: price,
            category: category,
            unit: unit,
            amount: amount
        }
        props.onSubmit(obj);
    }

    const onCancelClick = () =>{
        props.onCancel();
    }

    const clearAll = () => {
        setName('');
        setPrice('');
        setCategory('');
        setCategoryList((prev) => [...prev]);
        setUnit('');
        setAmount('')
    }

    let menuRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                props.onCancel();
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
                <label>Item name: <input type="text" value={name}onChange={onChangeName}/></label><br />
                <label>Item price: <input type="number" value={price} onChange={onChangePrice}/></label><br />
                <label>Category: </label>
                <select onChange={onChangeCategory}>
                        <option key=""value="">Select a category</option>
                    {
                        categoryList.map(data => (
                            <option key={data}value={data}>{data}</option>
                        ))
                    }
                </select><br/>
                <label>Unit: </label>                
                <select selected={unit}onChange={onChangeUnit}>
                        <option  key=""value="">Select a unit</option>
                    {
                        unitList.map(data => (
                            <option key={data}value={data}>{data}</option>
                        ))
                    }
                </select><br/>
                <label>Amount: <input value={amount}type="number" onChange={onChangeAmount}/></label><br />
                <button type="button" onClick={onSubmitClick}>Submit</button>
                <button type="button" onClick={onCancelClick}>Cancel</button>
                {/* <button type="button" onClick={clearAll}>Clear</button> */}
            </form>
        </div>
    );
}

export default GroceryAdd;
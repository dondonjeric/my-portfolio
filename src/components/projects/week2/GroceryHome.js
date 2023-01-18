import React from "react";
import GroceryCart from "./GroceryCart";

import './GroceryHome.css'
import GroceryShopping from "./GroceryShopping";

const GroceryHome = (props) => {
    return (
        <div>
            <div>
                {/* <GroceryShopping/> */}
                <GroceryCart props/>
            </div>
        </div>
    );
}

export default GroceryHome;
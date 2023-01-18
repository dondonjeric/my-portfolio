import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const GroceryCart = () => {

    const [cartItems, setCartItems] = useState([]);
    let emptyCart = 
    <div>
      <h2>Your grocery cart is empty</h2>
      <br/>
      <h3>Buy grocery when your stock is running low</h3>
      <br/>
      <br/>
      <Link to="/grocery-shop">Continue shopping</Link>
      {/* <h3><a>Continue shopping</a></h3> */}
    </div>
    let cartBody =
    <div>
      Cart Items
    </div>
  return (
    <div>
    {
        cartItems.length > 0 ? cartBody: emptyCart
    }
    </div>
  )
}

export default GroceryCart
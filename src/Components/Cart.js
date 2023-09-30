import React from "react";

import { useSelector } from 'react-redux';

const Cart =()=>{
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);
    const val = cartItems.map((item)=>item.price);
    console.log(val);
    const total = val.reduce((total, amount) => total + amount); 
    console.log(total);
    return (
        <div className="product-cart">

            <div >
                <h2>Cart</h2>
                <div className="cart-div">
            
                    {  cartItems && cartItems.map((item)=>(
                        <div className="product">
                            <div>
                                <img src={item.images[0]} alt = "product-image"/>
                                <p>Title :  {item.title}</p>
                                <p>Price : ${item.price}</p>
                            </div>
                            <button >Remove</button>
                        </div>

                    ))}
                    
                </div>
                
            
            </div>
            <div className="price-list">
                <div></div>
                <h2>Checkout List</h2>
                <table>
                    <tr><th>Title</th><th>Price</th></tr>
                    {cartItems && cartItems.map((item)=>(
                        <tr>
                                <td> {item.title}</td>
                                <td><b>:&nbsp;&nbsp;&nbsp;&nbsp;${item.price}</b></td>
                        </tr>
                    ))}

                    <tr style={{borderTop:"1px solid white",marginTop:"20px"}}>
                        <td><h3>Total Price </h3></td>
                        <td>
                          <b>:&nbsp;&nbsp;&nbsp;&nbsp;${total}</b> 
                        </td>
                    </tr>
                   
                </table>

                <button>Click to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;
import React, { Component } from "react";
import formatCurrency from "../util";

class Cart extends Component {
  render() {
    console.log("-----------" + this.props.cartItems.length);
    const {cartItems, count, removeFromCart} = this.props;
    return (
      <div>
          {cartItems.length === 0 ? (<div>You have No items in the cart</div>) : (
              <div>
                  You have {count} Items int the cart!!
              </div>
          )}
        
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                  <div>
                    <img src={item.image}></img>
                  </div>
                <div>
                    {item.title}
                </div> 
                <div className="right">
                    {formatCurrency(item.price)} x {item.count}
                <button className="button" onClick={() => removeFromCart(item)}>Remove</button>
                </div>               
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !==0 && <div className="cart">
                <div className="total">
                    Total: {" "}
                    {formatCurrency(cartItems.reduce((a,c) => a+(c.price*c.count),0))}
                </div>
                <button className="button primary">Proceed</button>
        </div>}
        
      </div>
    );
  }
}

export default Cart;

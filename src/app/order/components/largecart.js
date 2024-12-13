'use client'
import { useState, useEffect } from "react";
import './largecart.css'

const LargeCart = ({setCartOpen, cart, addToCart, removeFromCart, setCart, amount, cartOpen}) => {
  const [tip, setTip] = useState(0.2)
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0).toFixed(2);
  };

  useEffect(() => {
    if (amount === 0) {
      setCartOpen(false);
      setTip(0.2);
    }
  }, [amount, setCartOpen]);

  async function handleCheckOut(){
    setIsCheckoutDisabled(true);
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
    const newOrder = await response.json()
    console.log(newOrder)
    setCart([])
    alert('Order Placed Successfully')
    
    // Re-enable the button after 1 second
    setTimeout(() => {
      setIsCheckoutDisabled(false);
    }, 1000);
  }



  return (
    <div className={`large-cart-container ${cartOpen ? 'open' : ''}`}>
      <div className="cart-head">
        <h1>Le Petit Delivery</h1>
        <button onClick={() => setCartOpen(false)}>×</button>
      </div>
      <hr />
      <div className="cart-content">
        <div className="item-amount">
          {amount === 1 ? `${amount} Item` : `${amount} Items`}
        </div>
        {cart.map((item, index) => (
          <div className="item" key={index}>
            <div className="quantity">
              <button onClick={() => removeFromCart(item.name)}>-</button>
              <div>{item.quantity}</div>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <div className="name">{item.name}</div>
            <div className="price">${(Number(item.price) * Number(item.quantity)).toFixed(2)}</div>
          </div>
        ))}
        <div className="summary">
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="summary-item">
            <span>Hidden Fees:</span>
            <span>$3.94</span>
          </div>
          <div className="tip-selection">
            <span>Select Tip:</span>
            <div>
              <button className={tip === 0.18 ? "selected" : ""} onClick={() => setTip(0.18)}>18%</button>
              <button className={tip === 0.2 ? "selected" : ""} onClick={() => setTip(0.2)}>20%</button>
              <button className={tip === 0.25 ? "selected" : ""} onClick={() => setTip(0.25)}>25%</button>
            </div>
          </div>
          <div className="summary-item total">
            <strong> Total</strong>
            <strong>${(Number(calculateTotal()) + Number(calculateTotal()) * tip + 3.94).toFixed(2)}</strong>
          </div>
        </div>
        <div className="actions">
          <button onClick={() => {setCart([]); alert("We're sorry to see you go");}}>Empty Cart</button>
          <button onClick={handleCheckOut} disabled={isCheckoutDisabled}>
          {isCheckoutDisabled ? 'Processing...' : 'Check Out'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default LargeCart;
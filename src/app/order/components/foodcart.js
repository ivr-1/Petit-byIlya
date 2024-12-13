'use client'
import './foodcart.css';
import { useState, useEffect } from 'react';
import { BsCart3 } from "react-icons/bs";
import LargeCart from './largecart';

const Minicart = ({ amount, setCartOpen }) => (
  <div className='mini-cart' aria-label='Shopping cart' onClick={() => setCartOpen(true)}>
    <BsCart3 aria-label="Cart Icon" size='28px'/>
    <div aria-live="polite">{amount}</div>
  </div>
);

function FoodCart({ cart, removeFromCart, addToCart, setCart }) {
  const [amount, setAmount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [resize, setResize] = useState(false);
  const [mobileCart, setMobileCart] = useState(false);

  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setAmount(totalItems);
  }, [cart]);

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      setResize(true);
      setMobileCart(window.innerWidth < 1000);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setResize(false);
      }, 300);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (resize) {
      document.documentElement.style.setProperty('--transition-duration', '0s');
    } else {
      document.documentElement.style.setProperty('--transition-duration', '0.3s');
    }
    if (cartOpen && mobileCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [resize, cartOpen, mobileCart]);

  return (
    <div className='foodcart-container'>
      {amount > 0 && <Minicart amount={amount} setCartOpen={setCartOpen} />}
      <LargeCart
        setCartOpen={setCartOpen}
        setCart={setCart}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        amount={amount}
        cartOpen={cartOpen}
      />
    </div>
  );
}

export default FoodCart;
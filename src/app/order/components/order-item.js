import './order-item.css';
import React from 'react';

function OrderItem({
  itemName,
  itemPrice,
  itemText,
  itemImage,
  itemImageAlt,
  addToCart,
  removeFromCart,
  quantity
}) {
  return (
    <div className='item-container'>
      <div className='item-label' onClick={() => addToCart({ name: itemName, price: parseFloat(itemPrice)})}>
        <h1>{itemName}</h1>
        <p className='price'>${itemPrice}</p>
        <p className='description'>{itemText}</p>
      </div>
      <div
        className='item-image'
        role="img"
        aria-label={itemImageAlt}
        style={{
          backgroundImage: `url(${itemImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {quantity === 0 ? (
          <button onClick={() => addToCart({ name: itemName, price: parseFloat(itemPrice)})}>
            Add
          </button>
        ) : (
          <div className='quantity-control'>
            <button onClick={() => removeFromCart(itemName)}>-</button>
            <div>{quantity}</div>
            <button onClick={() => addToCart({ name: itemName, price: parseFloat(itemPrice)})}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderItem;


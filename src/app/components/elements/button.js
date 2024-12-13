import React from 'react';
import Link from 'next/link';

const Button = ({ buttonText, buttonLink, handleClick, marginOverride, heightOverride }) => {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '160px',
    height: heightOverride || '40px',
    margin: marginOverride || '40px 0 0 0',
    fontFamily: 'var(--font-rocknroll)',
    fontSize: '1rem',
    color: '#FFF0F0',
    border: '2px solid #62938A',
    backgroundColor: '#62938A',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const handleHover = (e) => {
    e.target.style.backgroundColor = '#8BAEA7';
  };

  const handleMouseDown = (e) => {
    e.target.style.backgroundColor = '#62938A';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#62938A';
  };

  return (
    <Link href={buttonLink}>
        <button
        style={buttonStyle}
        onMouseEnter={handleHover}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        >
        {buttonText}
        </button>
    </Link>
  );
};

export default Button;
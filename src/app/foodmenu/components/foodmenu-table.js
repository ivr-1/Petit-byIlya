import React from 'react';
import MenuData from '../../components/foodmenudata';
import './foodmenu-table.css';


function MenuTable() {
    return (
      <div className="menu-container">
        {Object.entries(MenuData).map(([category, items]) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="menu-items">
              {items.map((item, index) => (
                <div key={index} className="menu-item">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
export default MenuTable;
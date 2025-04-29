import React, { useState } from 'react';
import Mainscreen from './Mainscreen'; // Import Mainscreen component

const ShoopingCartScreen = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Biscuit', price: 50, Quantity: '20' },
    { id: 2, name: 'Laptop', price: 60, Quantity: '3' },
    { id: 3, name: 'Computer', price: 70, Quantity: '2' },
    { id: 4, name: 'Speaker', price: 80, Quantity: '1' },
    { id: 5, name: 'Handfree', price: 90, Quantity: '40' },
  ]);

  return <Mainscreen items={items} />;
};

export default ShoopingCartScreen;

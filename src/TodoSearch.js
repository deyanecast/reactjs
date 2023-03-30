import React from 'react';
import './TodoSearch.css';

function TodoSearch({ search, setValue }) {
  const onSearchValueChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
  };
  return (
    <input 
    className="TodoSearch" 
    placeholder="Cebolla" 
    value={search}
    onChange={onSearchValueChange}
    />
  
  );


  
}

export { TodoSearch };
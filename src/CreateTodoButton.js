import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClick = (msg) => {
      alert(msg);
    }
  return (
    <button 
      className="CreateTodoButton"
      onClick={() => onClick()}
    >
      +
      </button>
  );
}

export { CreateTodoButton };
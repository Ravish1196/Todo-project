import React from "react";
import { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        placeholder="Enter your Todo"
        className="input-box-todo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <button className="add-btn" onClick={()=>{
        props.addList(inputText);
        setInputText("");
      }}> + </button>
      
    </div>
  );
}

export default TodoInput;

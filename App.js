import React from "react";
import TodoInput from "./src/components/TodoInput";
import { useState } from "react";
import TodoList from "./src/components/TodoList";
function App() {
  const [listTodo, setLlistTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setLlistTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setLlistTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./assets/css/app.scss";
import { Card } from "antd";
import ToDoForm from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todoText) => {
    const newTodoList = [...todoList, todoText];
    setTodoList(newTodoList);
    toast.success("ToDo added");
  };

  const deleteHandler = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    toast.info("ToDo deleted");
  };

  return (
    <>
      <Card style={{ width: "600px", marginInline: "auto" }}>
        <ToDoForm onAddTodo={addTodoHandler} />
        <TodoList list={todoList} onDelete={deleteHandler} />
      </Card>
      <ToastContainer />
    </>
  );
}

export default App;

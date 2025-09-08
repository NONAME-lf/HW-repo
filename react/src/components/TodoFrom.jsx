import { useState } from "react";
import { Row, Col } from "antd";
import { toast, ToastContainer } from "react-toastify";
export default function ToDoForm(props) {
  const [todo, setTodo] = useState("");

  //   const changeHandler = (el) => {
  //     setTodo(el.target.value);
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo === "") return toast.error("Enter what you need to do");

    props.onAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Row gutter={20}>
        <Col span={8}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Col>
        <Col span={4}>
          <button type="submit">Add ToDo</button>
        </Col>
      </Row>
    </form>
  );
}

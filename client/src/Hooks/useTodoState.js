import { useState } from "react";
import axios from "axios";

export default (initialTodos) => {
  const [todoList, setTodoList] = useState(initialTodos);

  return {
    todoList,
    setTodoList,
    createNewTodo: (newName, newTodo) => {
      const newTodoObject = {
        name: newName,
        task: newTodo,
        complete: false,
      };
      axios
        .post("http://localhost:5000/todos/add", newTodoObject)
        .then((res) => {
          newTodoObject._id = res.data._id;
          setTodoList([...todoList, newTodoObject]);
        });
    },

    removeTodo: (id) => {
      console.log(id);
      axios.delete(`http://localhost:5000/todos/delete/${id}`);
      const newList = todoList.filter((todo) => todo._id !== id);
      setTodoList(newList);
    },

    editTodo: (id, name, task) => {
      const editTodoObject = {
        _id: id,
        name: name,
        task: task,
      };
      setTodoList(
        todoList.map((todo) => (todo._id === id ? editTodoObject : todo))
      );
      axios.post(
        `http://localhost:5000/todos/update/${id}?name=${name}&task=${task}`
      );
    },

    toggleComplete: (id, name, task, complete) => {
      const newList = todoList.map((todo) =>
        todo._id === id ? { ...todo, complete: !todo.complete } : todo
      );
      setTodoList(newList);
      axios.post(
        `http://localhost:5000/todos/update/${id}?name=${name}&task=${task}&complete=${!complete}`
      );
    },
  };
};

//   const [todoList, setTodoList] = useState(initialValues);

//   const createNewTodo = (newName, newTodo) => {
//     const newTodoObject = {
//       id: uuidv4(),
//       name: newName,
//       task: newTodo,
//       completed: false,
//     };
//     setTodoList([...todoList, newTodoObject]);
//   };

//   const toggleComplete = (id) => {
//     const newList = todoList.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodoList(newList);
//   };

//   const removeTodo = (id) => {
//     const newList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(newList);
//   };

//   const editTodo = (id, name, task) => {
//     const newList = todoList.map((todo) =>
//       todo.id === id
//         ? {
//             ...todo,
//             name: name,
//             task: task,
//           }
//         : todo
//     );
//     setTodoList(newList);
//   };

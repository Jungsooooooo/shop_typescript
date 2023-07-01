import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import TodoList from "./todolistpage/ToDoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/toDoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;

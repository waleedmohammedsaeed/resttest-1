import React from 'react'
import { useEffect, useState } from 'react'
import './styles/content.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Customer from './Customer';

function Content() {
  const [todos, settodos] = useState();
  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then((response) => response.json())
      .then((data) => {
        settodos(data.todos)
        console.log(data)
    });
  }, []);

  return (
    <>
      <h1 className="mb-4">Actions here</h1>
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/customer" element={<Customer />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
      {todos
        ? todos.map((todo) => {
            return (
              <ul className="list-group w-25">
                <li className="list-group-item item" key={todo.id}>
                  {todo.name}
                </li>
              </ul>
            );
          })
        : "notfound"}
    </>
  );
}

export default Content
import React, { useState } from 'react'

import "font-awesome/css/font-awesome.min.css";
import { v4 as uuidv4 } from "uuid";

import style from './home.module.css';
import Todos from './Todos';
import Newtodo from './Newtodo';
import Search from './Search';

const Home = () => {
    const [todos, setTodos] = useState([]);

    // আমাদের যে todo গুলি আসতেছে সেই গুলি todos মধ্যে নিতে যাইতে হবে props মধ্যমে সেই জন্য setTodos করলাম 
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), ...todo }];
        })
    }
    const handleRemove = (id) => {
        setTodos((prevTodos) => {
            const filterTodos = prevTodos.filter((todo) => todo.id !== id);
            return filterTodos;
        })

        // const filtertodos = todos.filter((todo) => todo.id != id)
        // setTodos(filtertodos);
    }

    return (
        <div className={style.container}>
            <h3 style={{ color: '#000' }}>Todo App</h3>
            {/* এই function মাধ্যমে নিউ একটা একটা করে todo নিয়ে আসতে হবে  */}
            <Newtodo onAddTodo={handleAddTodo} />
            <Search todos={todos} />
            <Todos todos={todos} onRemoveTodo={handleRemove} />
        </div >
    )
}
export default Home;
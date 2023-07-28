import React, { useState } from 'react'

import style from './newtodo.module.css'

const Newtodo = (props) => {

    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: event.target.value }
        })
        // setTodo({ ...todo, [name]: event.target.value })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: '', desc: '' });
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style['form-field']}>
                <label htmlFor="">Title</label>
                {/* <input type="text" value={title} onChange={e => setTodo({ ...todo, title: e.target.value })} /> */}
                <input type="text" name='title' value={title} onChange={handleChange} />
            </div>

            <div className={style['form-field']}>
                <label htmlFor="">Description</label>
                {/* <textarea name="" id="" cols="30" rows="10" value={desc} onChange={e => setTodo({ ...todo, desc: e.target.value })}></textarea> */}
                <textarea name="desc" id="" cols="30" rows="10" value={desc} onChange={handleChange}></textarea>


            </div>

            <button className={style.btn} type='submit'>Add Todo</button>
        </form>
    )
}
export default Newtodo;

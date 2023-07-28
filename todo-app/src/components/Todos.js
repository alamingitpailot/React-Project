import React from 'react'
import Todo from './Todo'
import style from './todos.module.css';

const Todos = (props) => {



    const { todos } = props;

    return <section className={style.todos}>
        {
            todos.map((todo, index) => <Todo todo={todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />)
        }
    </section>
}

export default Todos;

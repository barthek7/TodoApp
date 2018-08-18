import React from 'react';
import style from './TodoList.css'

const TodoList = ({todos, remove}) => {
    const todoItems = todos.map((todo) => {
       return (
           <li key={todo.id} onClick={remove.bind(this,todo.id)}>{todo.text}</li>
       )
    });
    return (
        <ul className={style.TodoList}>{todoItems}</ul>
    )
}

export default TodoList;
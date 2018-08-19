import React from 'react';
import style from './TodoList.css'
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
    const todoItems = todos.map((todo) => {
       return (
           <Todo todo={todo} remove={remove}/>
       )
    });
    return (
        <ul className={style.TodoList}>{todoItems}</ul>
    )
}

export default TodoList;
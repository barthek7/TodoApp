import React from 'react';

const Todo = ({todo, remove}) => {
    return <li todo={todo} onClick={remove.bind(this,todo.id)} >{todo.text}</li>
}

export default Todo;
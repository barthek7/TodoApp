import React from 'react'
import style from './Title.css';
const Title = props => (
    <div className={style.Title}>
        <h1>{props.title}</h1>
        <p>Number of ToDo's: {props.taskQty}</p>
    </div>
)

export default Title;
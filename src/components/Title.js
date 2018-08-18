import React from 'react'
import style from './Title.css';
const Title = props => (
    <div className={style.Title}>
        <h1>{props.title}({props.taskQty})</h1>
    </div>
)

export default Title;
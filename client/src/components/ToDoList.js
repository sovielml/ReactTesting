import React from 'react'
import ToDo from './ToDo'

function ToDoList ({input}) {
    return (
        <ul>
            <li><ToDo text={input}></ToDo></li>
        </ul>
    )
}

export default ToDoList
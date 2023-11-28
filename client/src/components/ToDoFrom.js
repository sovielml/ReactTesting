import React, {useState} from 'react'
import ToDoList from './ToDoList';

function ToDoFrom() {
    //define an input state
    let [input, setInput] = useState("");
    const handleChange= (e)=>{
        setInput(e.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();


        setInput("");
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a todo' value={input} name='text' onChange={handleChange} required={true}/>
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default ToDoFrom
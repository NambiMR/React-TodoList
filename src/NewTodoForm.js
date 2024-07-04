import React, { useState } from 'react'
import './NewTodoForm.css'
import { v4 as uuid } from 'uuid'

const NewTodoForm=({createTodo}) => {
    const[userInput, setUserInput]= useState({})

    const handleChange= e =>{
        setUserInput({[e.target.name]:e.target.value})
    } 
    const handleSubmit= e =>{
        e.preventDefault();
        if (userInput.task === ''){
            alert("Please Enter the Task")
        }else{
            const newTodo={id:uuid(),task:userInput.task,completed:false}
            createTodo(newTodo)
            setUserInput({ task:"" })
        }
    }


    return(
        <form className='NewTodoForm'  onSubmit={handleSubmit}>
            <input 
            value={userInput.task}
            onChange={handleChange}
            type="text" 
            name='task'
            placeholder='What are the Task Today?'
            />
            <button>Add Task</button>
        </form>
    )
}
export default NewTodoForm
import React from 'react'
import Todo from '../Components/Todo'

const Todos = (props) => {

    let TodoStyle = {
        minheight : '90vh'
    }
  return (
    <div className='container my-1' style={TodoStyle}>
        <h3 className='my-3'>Todo List</h3>  
        {props.todos.length===0? 'No Todo to Display': props.todos.map((todo)=>{
            return(
                 <><Todo todo={todo} onDelete={props.onDelete} /><hr /></> )
        })}
         
    </div>
  )
}

export default Todos

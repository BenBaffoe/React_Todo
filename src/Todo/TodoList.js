import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoList({task  , id , completed, complete  , del}) {
  
  return (
    <div className='fit-content bg-cyan-500 m-2 rounded-md w-48 p-2 text-center' style={{ opacity: completed ? "0.6" : "1"}} >
    <div className='text-white flex justify-between'>
        <div>
        {task} 
        </div>
        <div className='flex space-x-3'>
       <FontAwesomeIcon icon={faTrash} color='black'  className='bg-white rounded-md p-2' onClick={()=>del(id)}/>
       <FontAwesomeIcon icon={faCheck} color='green' className='bg-green-500 rounded-md p-2' onClick={()=>complete(id)} />
        </div>
        
    </div>
    </div>
  )
}

export default TodoList

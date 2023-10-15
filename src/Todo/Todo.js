import React from 'react'
import TodoList from './TodoList';


function Todo({input , setInput , setTodo , todo , setShow, show}) {
    const getTodo =(e)=>{
        let final = e.target.value;
        setInput(final);
    }

    const AddTodo =()=>{
   const tasks = {
    id: Math.random(),
    task : input ,
    completed : false
  }

    setTodo([...todo ,  tasks]);
     setInput('');
     setShow(false);
    }


    const del =(id)=>{                    
      setTodo(() =>todo.filter((task)=>{ return task.id !== id} ));
      if(todo.length === null){
        return setShow(true);
      }
  }
  
  
  const complete =(id)=>{
    setTodo(()=> todo.map((e)=>{
      if (e.id === id){
       return {...e, completed: true};
      }else{
       return e;
      }
    })
    ) 
  };

  /*    for example we have an array [ Ben  , pedro , Han]
   we want to get rid of Han

   To do so

   we use filter
    we declare a parameter where the value of the parameter is the one clicked on ( what we want to get rid of)
   arr.filter((items) => {

    if (items === parametervalue){
      return false; // mmeaning it will not return Han
    }else{
      return true ; it will return everything
    }
   }
     
   )
  
  
  */

  return (
    <div>
        <h1 className="text-center text-5xl p-2  text-white">Todo</h1>
       <div className='p-4 border-none fit-content   bg-cyan-500'>
        <input  onChange={getTodo} value={input} type='text' className='p-4 m-1 outline-none cursor-auto'/>
        <button onClick={AddTodo} className='bg-red-600 p-4 rounded-md  text-white'>Add</button>
      </div>
      {show ? <div className="text-white text-center text-3xl p-4">Nothing Here !</div>: null}
      <div>
           {todo.map((item, id) =>{
     return(   
                 <TodoList  task={item.task} completed={item.completed} id={item.id} complete ={complete} del ={del} />
            ) 
           })}
    </div>
    </div>
  )
}

export default Todo

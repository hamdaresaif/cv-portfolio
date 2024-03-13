import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import trash from "../assets/trash.svg"
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
  const data= useSelector(state=> state.todos)
  const [todos,setTodos]=useState([])
  const [selectedIndex,setSelectedIndex] = useState(false)
  const dispatch=useDispatch()
  const handleChange = (e, index) => {

   
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], text: e.target.value };
    setTodos(updatedTodos);
  };


  const handleSave=(val)=>{
    if(val){
      setSelectedIndex(null)
    }
 }
  useEffect(()=>{
   
    setTodos(data)
  },[data])
  return (
    <div className=' '>
       <div className=' m-auto text-center font-bold text-lg my-2'> TODO's</div>
     <ul className="list-none">
{todos.map((todo,index) => (
      <li key={todo.id} className="mt-4 flex justify-between items-center key={todo.id} bg-zinc-800 px-4 py-2 rounded">
        {selectedIndex===index?
        <input type='text' value={todo.text} onChange={(e)=>handleChange(e,index)}  />
        // <input type="text" value={todo.text} onChange={(e) => handleChange(e, todo)}/>
        :
        <div className='text-white' >{todo?.text}</div>
        }
        <div className='flex items-center gap-2'>
         

{selectedIndex===index?
       <button
   
       onClick={()=>handleSave(todo.text)} 
       className="text-white bg-green-400 border-0
       py-2 px-3 focus: outline-none
       hover:bg-green-600 rounded text-md">
      {/* <img src={trash} className='text-white' width={30} />
       */}
       Save
   </button>
   :


        <button
        // onClick={() => dispatch(editTodo (todo))}
        onClick={()=>setSelectedIndex(index)} 
        className="text-white bg-yellow-300 border-0
        py-2 px-3 focus: outline-none
        hover:bg-yellow-200 rounded text-md">
       {/* <img src={trash} className='text-white' width={30} />
        */}
        Edit
    </button>
    }
        <button
        onClick={() => dispatch(removeTodo (todo.id))}
        className="text-white bg-red-500 border-0
        py-1 px-3 focus: outline-none
        hover:bg-red-600 rounded text-md">
       <img src={trash} className='text-white' width={30} />
    </button>
    </div>
    </li>

))}
</ul>
<div className=' m-auto text-center  text-lg my-2'> Basic todo App performing CRUD Operation </div>
    </div>
  )
}

export default Todos
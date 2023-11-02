import React from 'react'
import { useSelector } from 'react-redux'
import trash from "../assets/trash.svg"
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
  const todos= useSelector(state=> state.todos)
  const dispatch=useDispatch()
  return (
    <div className=' '>
       <div className=' m-auto text-center font-bold text-lg my-2'> TODO's</div>
     <ul className="list-none">
{todos.map((todo) => (
      <li key={todo.id} className="mt-4 flex justify-between items-center key={todo.id} bg-zinc-800 px-4 py-2 rounded">
        <div className='text-white' >{todo?.text}</div>
        
        <button
        onClick={() => dispatch(removeTodo (todo.id))}
        className="text-white bg-red-500 border-0
        py-1 px-2 focus: outline-none
        hover:bg-red-600 rounded text-md">
       <img src={trash} className='text-white' width={30} />
    </button>
    </li>

))}
</ul>
<div className=' m-auto text-center  text-lg my-2'> Basic todo App performing Create, Read and Delete Operation </div>
    </div>
  )
}

export default Todos
import React, { useEffect } from 'react'
import Todoinput from './Todoinput'
import axios from "axios"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getfailure, getrequest, getsuccess, postfailure, postrequest, postsuccess } from '../redux/action'
import { store } from '../redux/store'



const TodoList = () => {
    const dispatch= useDispatch();
   
     const {todos,isLoading,isError}= useSelector((store)=>{
        return {
            todos:store.todos,
            isLoading:store.isLoading,
            isError:store.isError,
        }
     }, shallowEqual)
    const gettodo=()=>{
        //dispatch request
       dispatch(getrequest())
       axios.get("http://localhost:8080/todos")
       .then((res)=>{
    
        //dispatch success
        dispatch(getsuccess(res.data))
       })
       .catch((err)=>{
        //dispatch failure
        dispatch(getfailure())
       })
    } 

    //-------posting data 
    const addtodo =(title)=>{

        const newtodo = {
            title:title,
            status:true,

        }
        dispatch(postrequest());
        axios.post("http://localhost:8080/todos", newtodo)
        .then((res)=>{
            dispatch(postsuccess(res.data))
        })
        .catch((err)=>{
            dispatch(postfailure)
        })
    }


    useEffect(()=>{
        gettodo();
    },[])
  return (
    <div> 
      
      <Todoinput  addtodo={addtodo}/>
      <h1>todolist</h1>
    {isLoading && <h1>Loading....</h1>}
    {isError && <h1>Error...</h1>}
    {
        todos.map((el,index)=>{
    return <div key={el.id}>
    {el.title}--- 
   {el.status?"complete":"pending"}

    </div>
        })
    }
    </div>
  )
}

export default TodoList

import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionTypes"
export const getrequest=()=>{
    return{type:GET_TODO_REQUEST}
}
export const getsuccess =(payload)=>{
    return {type:GET_TODO_SUCCESS,payload}
}
export const getfailure =()=>{
    return {type:GET_TODO_FAILURE}
}

/// -----POST ACTION -------
export const postrequest=()=>{
    return{type:POST_TODO_REQUEST}
}
export const postsuccess =(payload)=>{
    return {type:POST_TODO_SUCCESS,payload}
}
export const postfailure =()=>{
    return {type:POST_TODO_FAILURE}
}


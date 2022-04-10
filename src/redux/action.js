import { INCREMENT,DESCKREMENT,INPUT_TEXT,COMMENT_CREATE,UPDATE_COMMENT,DELETE_COMMENT,COMMENTS_LOADER } from "./types";
export function incrementLikes(){
    return {
        type: INCREMENT
    }
}
export function descrementLikes(){
    return{
        type:DESCKREMENT
    }
}
export function inputText(text){
    return{
        type:INPUT_TEXT,
        data:text
    }
}
export function commentCreate(text,id){
    return{
        type:COMMENT_CREATE,
        data:{
            text,id
        }
    }
}
export function commentUpdate(text,id){
    return{
        type:UPDATE_COMMENT,
        data:{
            text,id
        }
    }
}
export function deleteComment(id){
    return{
        type:DELETE_COMMENT,
        id
    }
}
export function commentsLoad(){
    return async dispatch=>{

        const response= await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
        const jsonData=await response.json()
        dispatch({
            type:COMMENTS_LOADER,
            data:jsonData
        })
    }
}
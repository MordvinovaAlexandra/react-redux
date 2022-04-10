import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {commentUpdate} from './redux/action';
import {deleteComment} from './redux/action';

function SingleComment ({comment,id}){
    const [commentText,setCommentText]=useState('')
    const dispatch=useDispatch()
    const handleDelete=(e)=>{
        e.preventDefault()
        dispatch(deleteComment(id))
        console.log(id)
    }
    useEffect(()=>{
        if(comment){
            setCommentText(comment)
        }
    },[comment])

    const onUpdateHandler=(e)=>{
        e.preventDefault()
        dispatch(commentUpdate(commentText,id))
    }
    const handleInput=(e)=>{
        setCommentText(e.target.value)
    }
    
   
    return(
        
            <form onSubmit={onUpdateHandler} className="comments-item">
                <div onClick={handleDelete}className="comments-item-delete">&times;</div>
                <input type="text" value={commentText} onChange={handleInput}></input>
                <input type="submit" hidden></input>
            </form>
          
       
    )
    }
    export default SingleComment
import SingleComment from "./SingleCommit";
import { useState,useEffect } from "react";
import uniqid from 'uniqid'
import { commentCreate,commentsLoad } from "./redux/action";
import {useSelector,useDispatch} from 'react-redux'

function Comments(props){
const [textComment,SetTextComment]=useState('');

const dispatch=useDispatch()

const commentss=useSelector(state=>{
    return state.commentReduser.comments
})
console.log('массив comment reduser',commentss)

const handleInput=(e)=>{
    SetTextComment(e.target.value)
    
}
 
const handleSubmit=(e)=>{
    e.preventDefault()
    const id=uniqid()
    dispatch(commentCreate(textComment,id))
    console.log(props)
}

useEffect(()=>{
    dispatch(commentsLoad())
},[])
return(
    <div className="card-comments">
        <form onSubmit={handleSubmit} className="comments-item-create">
            <input type="text" value={textComment} onChange={handleInput}></input>
            <input type="submit" hidden></input>
        </form>
      
       <div>{commentss.map(comment=>{
           return <SingleComment key={comment.id} id={comment.id} comment={comment.text}/>
       }
       )}</div>
    </div>
)
}
export default Comments
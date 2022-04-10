import {COMMENT_CREATE,UPDATE_COMMENT,DELETE_COMMENT,COMMENTS_LOADER} from './types'
const initialState={
comments:[
    {}
]
}

export const commentReduser=(state=initialState,action)=>{
    console.log(action)
switch(action.type){
    case COMMENT_CREATE:
        return{
            ...state,
            comments:[...state.comments, action.data]
        }
    case COMMENTS_LOADER:
        const commentNew=action.data.map(res=>{
            return{
                text:res.name,
                id:res.id
            }
        })
            return{
                ...state,
                comments:commentNew
            }
    case UPDATE_COMMENT:
        const {data}=action;
        const {comments}=state;
        const itemIndex=comments.findIndex(res=>res.id===data.id)
        const nextComments=[...comments.slice(0,itemIndex),data,
        ...comments.slice(itemIndex+1)
        ]
            return{
                ...state,
                comments:nextComments
            }
    case DELETE_COMMENT:
        return(()=>{
        const {id}=action;
        const {comments}=state;
        const itemIndex=comments.findIndex(res=>res.id===id)
        const nextComments=[
        ...comments.slice(0,itemIndex),
        ...comments.slice(itemIndex+1)
        ]
            return{
                ...state,
                comments:nextComments
            }
        })()
        default:
            return state
}
}
import {DESCKREMENT} from './types'
import {INCREMENT} from './types'

const initialState={
    likes:0
}
export const likesReduser=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,//всегда делаем копию, не меняем напрямую!!
                //признак иммутабельности
                likes:state.likes+1
            }
        case DESCKREMENT:
            return{
                ...state,
                likes:state.likes-1
            }
            default:
                return state
    }
}
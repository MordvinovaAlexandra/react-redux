import {INPUT_TEXT} from './types'
const initialState={
    input:''
}
export const inputReduser=(state=initialState,action)=>{
    switch(action.type){
        case INPUT_TEXT:
            return {
                ...state,//всегда делаем копию, не меняем напрямую!!
                input:action.data //признак иммутабельности
                
            }
       
            default:
                return state
    }
}
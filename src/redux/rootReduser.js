import { combineReducers } from "redux";
import { likesReduser } from "./likesReduser";
import {inputReduser} from './inputReduser';
import {commentReduser} from './commentReduser'
export const rootReduser=combineReducers({
    likesReduser ,
    inputReduser,
    commentReduser
})

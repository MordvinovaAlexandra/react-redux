import {useSelector,useDispatch} from 'react-redux'
import {inputText} from './redux/action'

function Title(props){
const dispatch=useDispatch()

const text=useSelector(state=>{
        return state.inputReduser.input
    })

const handleChange=(e)=>{
     dispatch(inputText(e.target.value))
     console.log(props)
    }
return(
    <div className="card-title">
        <div className="card-title-top">
            <input
            type='text'
            onChange={handleChange}
            ></input>
        </div>
    <p>{text}</p>
    </div>
)
}
export default Title;
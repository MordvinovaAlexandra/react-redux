
import {connect} from 'react-redux';
import {descrementLikes,incrementLikes} from './redux/action'

function Likes(props){
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>{"\u2764"}</button>
            <span>{props.likes}</span>
            <button onClick={props.Dislike}>disLike</button>
        </div>
    )
}
function mapStateToProps(state){
    console.log('map state to props',state)
    return{
        likes:state.likes
    }
       
    
}
function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes:()=>{
            console.log('click');
           
            dispatch(incrementLikes())
        },
        Dislike:()=>{dispatch(descrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
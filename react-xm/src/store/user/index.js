import _state from './state'
import {CHANGE_USERNAME,EXIT} from './action-types'

const reducer=(state=_state,action)=>{
	const new_state=Object.assign({},state);
	 switch (action.type){
        	case CHANGE_USERNAME:
        	  new_state.userInfo = action.userInfo;
	  		  localStorage.userInfo = JSON.stringify(new_state.userInfo)
        	break;
        	case EXIT:
        	 	new_state.userInfo=null;
                localStorage.removeItem('userInfo');
        	default:break;
        }

	 return new_state
}

export default reducer
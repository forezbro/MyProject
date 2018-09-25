import _state from './state'
import {CHANGE_ID} from './action-types'
import {CHANGE_SHOW} from './action-types'

const reducer=(state=_state,action)=>{
	const new_state=Object.assign({},state);
	 switch (action.type){
        	case CHANGE_ID:
        	  new_state.dataId = action.data;
	  		
        	break;
        	case CHANGE_SHOW:
    		  new_state.show=action.data;
        	default:break;
        }

	 return new_state
}

export default reducer
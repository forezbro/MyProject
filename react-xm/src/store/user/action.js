import {CHANGE_USERNAME,EXIT} from './action-types'
export default {
	 login({username,password,success,fail}){
           return dispatch => {
           	  setTimeout(() => {
                    if(username ==='cp' && password === 'cp') {
                      // console.log(dispatch)
                    	dispatch({
                    		 type:CHANGE_USERNAME,
                    		 userInfo:{
                    		 	username:'mr.yx',
                    		 	signature:'pretty'
                    		 }
                    	})
                    	success()
                    	return;

                    }      
                      fail()
            
           	  },1000)
           }
	 },
	 exit () {
	 	return {
	 		type:EXIT
	 	}
	 }
}
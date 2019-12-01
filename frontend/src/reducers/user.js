const initialState = {
    user_id: 1,
    user_password: 'initial',
    user_login: 'initial',
};

export default function user (state = initialState, action) {
  	switch(action.type){
		case('CHECK_USER'): {
            return action.payload
        }
        case('CHECKED_USER_SUCCESS'): {
            return action.data
        }
        case('CHECKED_USER_FAIL'): {
            return action.data
        }
		default: {
			return state;
		}
	}
}
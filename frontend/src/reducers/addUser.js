const initialState = {
    user_id: 'initial',
    user_password: 'initial',
    user_login: 'initial',
};

export default function addUser (state = initialState, action) {
  	switch(action.type){
		case('ADD_USER'): {
            return action.payload
        }
        case('ADDED_USER_SUCCESS'): {
            return action.data
        }
        case('ADDED_USER_FAIL'): {
            return action.data
        }
		default: {
			return state;
		}
	}
}
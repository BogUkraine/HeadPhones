const initialState = 'keks';

export default function currentUser (state = initialState, action) {
    switch(action.type){
		case('ADD_ERROR_LOGIN'): {
			return action.payload;
        }
        case('ADD_ERROR_PASSWORD'): {
			return action.payload;
        }
        default: {
			return state;
		}
	}
}
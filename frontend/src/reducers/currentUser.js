const initialState = {
    user_id: "no",
    user_name: "no",
    user_password: "no",
    user_login: "no",
};

export default function currentUser (state = initialState, action) {
    switch(action.type){
		case('CHANGE_USER'): {
			return action.payload;
        }
        default: {
			return state;
		}
	}
}
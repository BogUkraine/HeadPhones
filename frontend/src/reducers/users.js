const initialState = [{
	user_id: 1,
	user_name: "Bohdan",
	user_password: "123",
	user_login: "BogUkraine"
},
{
	user_id: 2,
	user_name: "dan",
	user_password: "123",
	user_login: "Ukraine"
},
];

export default function users (state = initialState, action) {
	switch(action.type){
		case('ADD_USER'): {
			return state;
		}
		case('REFRESH_USERS'): {
			return [
				...action.payload
			]
		}
		case('ENTER_USER'): {
			return state
				//state.currentUser: action.payload
			
		}
	}

	return state;
}
const initialState = true;


export default function queue(state = initialState, action) {
  	switch(action.type){
		case('CHANGE_CHECKER'): {
			return action.payload
        }
		default: {
			return state;
		}
	}
}
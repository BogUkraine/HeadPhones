const initialState = "quote";

export default function quote(state = initialState, action) {
  	switch(action.type){
		case('FETCH_QUOTE'): {
			return state
		}
		case('FETCHED_QUOTE_SUCCESS'): {
			return action.data
		}
		default: {
			return state;
		}
	}
}
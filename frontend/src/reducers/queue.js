const initialState = [{
	track_id: "",
	track_link: "",
}];


export default function queue(state = initialState, action) {
  	switch(action.type){
		case('COPY_TRACKS'): {
			return action.payload
		}
		default: {
			return state;
		}
	}
}
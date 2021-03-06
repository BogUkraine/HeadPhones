const initialState = [
    {
		track_id: 1
	}
];

export default function tracks(state = initialState, action) {
	switch(action.type){
		case('LOAD_TRACKS'): {
			return [
				...action.payload
			]
		}
		case('FETCH_TOP_TRACKS'): {
			return state
		}
		case('FETCHED_TOP_TRACKS_SUCCESS'): {
			return action.data
		}
		default: {
			return state;
		}
	}
}
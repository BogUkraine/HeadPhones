const initialState = [
    {
		track_id: 1
	}
];

export default function search(state = initialState, action) {
	switch(action.type){
		case('FETCH_SEARCH'): {
			return state;
        }
        case('FETCHED_SEARCH_SUCCESS'): {
			return action.data;
		}
		default: {
			return state;
		}
	}
}
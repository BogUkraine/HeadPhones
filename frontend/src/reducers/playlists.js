const initialState = [
];

export default function playlists (state = initialState, action) {
  	switch(action.type){
		case('FETCH_PLAYLISTS'): {
			return [
				...action.payload
			]
		}
		case('FETCHED_PLAYLISTS_SUCCESS'): {
			return action.payload
		}
		default: {
			return state;
		}
	}
}
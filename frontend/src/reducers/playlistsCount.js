const initialState = {
    count: 1,
}

export default function playlistsCount (state = initialState, action) {
  	switch(action.type){
		case('FETCH_PLAYLISTS_COUNT'): {
			return state
        }
        case('FETCHED_PLAYLISTS_COUNT_SUCCESS'): {
			return action.payload
		}
		default: {
			return state;
		}
	}
}
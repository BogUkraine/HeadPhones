const initialState = [];

export default function pickedPlaylist (state = initialState, action) {
    switch(action.type){
		case('FETCH_PICKED_PLAYLIST'): {
			return [action.payload]
        }
        case('FETCHED_PICKED_PLAYLIST_SUCCESS'): {
            return action.payload
		}
		case('FETCH_EMPTY_PICKED_PLAYLIST'): {
			return state
		}
        default: {
			return state;
		}
	}
}
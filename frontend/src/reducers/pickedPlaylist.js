const initialState = [{
	playlist_id: 1,
	playlist_name: 'kek',
	track_id: 1
}];

export default function pickedPlaylist (state = initialState, action) {
    switch(action.type){
		case('FETCH_PICKED_PLAYLIST'): {
			return action.payload
        }
        case('FETCHED_PICKED_PLAYLIST_SUCCESS'): {
            return action.data
        }
        default: {
			return state;
		}
	}
}
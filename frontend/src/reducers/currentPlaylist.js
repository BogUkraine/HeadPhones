const initialState = [{
	playlist_id: 1,
	playlist_name: 'kek',
	track_id: 1
}];

export default function currentPlaylist (state = initialState, action) {
    switch(action.type){
		case('LOAD_CURRENT_PLAYLIST_DATA'): {
			return action.payload
		}
        default: {
			return state;
		}
	}
}
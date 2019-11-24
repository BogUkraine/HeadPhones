const initialState = [{
    playlist_id: 1,
    user_id: 1,
	playlist_name: 'kek',
	track_id: 1,
}];

export default function currentPlaylistS (state = initialState, action) {
    switch(action.type){
		case('LOAD_CURRENT_PLAYLISTS'): {
			return action.payload
		}
        default: {
			return state;
		}
	}
}
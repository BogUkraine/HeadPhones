const initialState = [];

export default function playlists (state = initialState, action) {
  	switch(action.type){
		case('FETCH_PLAYLISTS'): {
			return state
		}
		case('FETCHED_PLAYLISTS_SUCCESS'): {
			return action.data
		}
		case('CHANGED_PLAYLIST_NAME_SUCCESS'): {
			for(let i = 0; i < state.length; i++){
				if(state[i].playlist_id === action.payload.playlist_id){
					state[i].playlist_name = action.payload.playlist_name;
					break;
				}
			}
			
			return state;
		}
		default: {
			return state;
		}
	}
}
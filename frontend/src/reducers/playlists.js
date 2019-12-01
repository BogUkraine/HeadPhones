const initialState = [{
	playlist_id: 1,
	playlist_name: "kek1"
},
];

export default function playlists (state = initialState, action) {
  	switch(action.type){
		case('FETCH_PLAYLISTS'): {
			return action.payload
		}
		case('FETCHED_PLAYLISTS_SUCCESS'): {
			return action.data
		}
		default: {
			return state;
		}
	}
}
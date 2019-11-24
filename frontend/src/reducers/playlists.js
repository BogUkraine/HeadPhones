const initialState = [
    'My home playlist',
    'My work playlist'
];

export default function playlists (state = initialState, action) {
  	switch(action.type){
		case('LOAD_PLAYLISTS'): {
			return [
				...action.payload
			]
		}
		case('GET_CURRENT_PLAYLISTS'): {
			return action.payload
		}
		default: {
			return state;
		}
	}
}
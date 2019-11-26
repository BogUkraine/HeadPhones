const initialState = [
    'My home playlist',
    'My work playlist'
];

export default function albums (state = initialState, action) {
  	switch(action.type){
		case('LOAD_ALBUMS'): {
			return [
				...action.payload
			]
		}
		default: {
			return state;
		}
	}
}
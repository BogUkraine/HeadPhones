const initialState = [
    'My home playlist',
    'My work playlist'
];

export default function tracks (state = initialState, action) {
	switch(action.type){
		case('LOAD_TRACKS'): {
			return [
				...action.payload
			]
		}
		default: {
			return state;
		}
	}
}
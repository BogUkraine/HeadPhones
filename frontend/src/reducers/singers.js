const initialState = [
    'My home playlist',
    'My work playlist'
];

export default function singers (state = initialState, action) {
  	switch(action.type){
		case('LOAD_SINGERS'): {
			return [
				...action.payload
			]
		}
		default: {
			return state;
		}
	}
}
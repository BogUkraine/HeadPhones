const initialState = {
    repeating: false,
    shuffle: false,
    isPlaying: false,
}

export default function footer (state = initialState, action) {
    switch(action.type){
        case('CHANGE_REPEATING'): {
            state.repeating = action.payload
			return state
        }
        case('CHANGE_SHUFFLE'): {
            state.shuffle = action.payload
			return state
        }
        case('CHANGE_IS_PLAYING'): {
            state.isPlaying = action.payload
			return state
		}
		default: {
			return state;
        }
    }
}
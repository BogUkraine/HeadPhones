const initialState = {
    track_id: 1,
    track_link: '',
    index: 0,
};

export default function currentTrack (state = initialState, action) {
    switch(action.type){
		case('CHANGE_CURRENT_TRACK'): {
			return action.payload;
        }
        case('NEXT_CURRENT_TRACK'): {
			return action.payload;
        }
        case('PREVIOUS_CURRENT_TRACK'): {
			return action.payload;
        }
        default: {
			return state;
		}
	}
}
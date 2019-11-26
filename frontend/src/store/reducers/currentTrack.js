const initialState = {
    track_id: 1,
    track_link: ''
};

export default function currentTrack (state = initialState, action) {
    switch(action.type){
		case('CHANGE_CURRENT_TRACK'): {
			return action.payload;
        }
        default: {
			return state;
		}
	}
}
const initialState = {
    repeating: false,
    shuffle: false,
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
		default: {
			return state;
        }
    }
}

// const initialState = {
//     playlistIsPlaying: true,
//     songPercent: 0,
//     songTime: 0,
//     songDuration: 100,
//     volumeLevel: 80,
// };

// export default function footer (state = initialState, action) {
//     switch(action.type){
// 		case('CHANGE_FOOTER_IS_PLAYING'): {
//             state.playlistIsPlaying = !state.playlistIsPlaying;
// 			return state;
//         }
//         case('CHANGE_FOOTER_SONG_PERCENT'): {
// 			return state;
//         }
//         case('CHANGED_FOOTER_SONG_PERCENT_SUCCESS'): {
//             state.songPercent = action.payload;
//             return state;
//         }        
//         case('CHANGE_FOOTER_SONG_TIME'): {
// 			return state
//         }
//         case('CHANGED_FOOTER_SONG_TIME_SUCCESS'): {
//             state.songTime = action.payload;
//             return state;
//         }
//         case('CHANGE_FOOTER_SONG_DURATION'): {
// 			return state
//         }
//         case('CHANGED_FOOTER_SONG_DURATION_SUCCESS'): {
//             state.songDuration = action.payload;
//             return state;
//         }
//         case('CHANGE_FOOTER_VOLUME_LEVEL'): {
//             return state;
//         }
//         case('CHANGED_FOOTER_VOLUME_LEVEL_SUCCESS'): {
//             state.volumeLevel = action.payload;
//             return state;
//         }
        
//         default: {
// 			return state;
// 		}
// 	}
// }
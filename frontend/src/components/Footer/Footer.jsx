import React, { Component } from 'react';
import {connect} from 'react-redux';

import FooterTrack from './FooterTrack';
import FooterControlsLeft from './FooterControlsLeft';
import FooterControlsRight from './FooterControlsRight';
import FooterSeekbar from './FooterSeekbar';
import FooterMore from './FooterMore';

import time from './../../functions/time.js';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
			playlist: [],
            playlistIsPlaying: true,
            showVisualizer: false,
            audioAnalyser: null,
            audioControls: {
                songPercent: 0,
                songTime: '',
                songDuration: ''
            },
			volumeLevel: 80,
		}
		
        this.reactAudioPlayer = React.createRef();
        this.updateIsPlaying = this.updateIsPlaying.bind(this);
        this.goNextSong = this.goNextSong.bind(this);
        this.goPreviousSong = this.goPreviousSong.bind(this);
        this.playSong = this.playSong.bind(this);
        this.pauseSong = this.pauseSong.bind(this);
        this.onTimeUpdateListener = this.onTimeUpdateListener.bind(this);
        this.updateAudioTime = this.updateAudioTime.bind(this);
        this.updateVolumeLevel = this.updateVolumeLevel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
		this.setState({ playlist: nextProps.playlist})
    }
    
    render() {
        return (
            <footer className="footer" id="footer">
                <audio
                className="footer__audio"
                src={this.props.queue[this.props.currentTrack.index].track_link}
                ref={this.reactAudioPlayer}
				onTimeUpdate={this.onTimeUpdateListener}
				onEnded={this.goNextSong}
				autoPlay={true}
                />

                <FooterSeekbar
                updateAudioTime={this.updateAudioTime}
                audioControls={this.state.audioControls} />

                <div className="footer__wrapper">
                    <FooterControlsLeft
                    audioControls={this.state.audioControls}
                    playlistIsPlaying={this.state.playlistIsPlaying}
                    updateAudioTime={this.updateAudioTime}
                    goPreviousSong={this.goPreviousSong}
                    updateIsPlaying={this.updateIsPlaying}
                    goNextSong={this.goNextSong}
                    playlist={this.props.playlist}
					/>

                    <FooterTrack
                    track_name={this.props.currentTrack.track_name}
                    album_name={this.props.currentTrack.album_name}
                    singer_name={this.props.currentTrack.singer_name}
                    album_year={this.props.currentTrack.album_year}
                    album_img={this.props.currentTrack.album_img}
                    />

                    <FooterMore />

                    <FooterControlsRight
					audioControls={this.state.audioControls}
					volumeLevel={this.state.volumeLevel}
              		updateVolumeLevel={this.updateVolumeLevel}
					/>
                </div>
            </footer>
        );
    }

    updateIsPlaying(isPlaying) {
		isPlaying ? this.pauseSong() : this.playSong();
    }

    playSong() {
        if (this.props.queue !== undefined && this.props.queue.durationlength !== 0) {
			setTimeout(function () {
				
				if (this.reactAudioPlayer.current.play() !== undefined) {
					this.reactAudioPlayer.current.play().then(function() {
				// Automatic playback started!
				}).catch(function(error) {
				// Automatic playback failed.
				});
				}

			  }.bind(this), 0)

		this.setState({ playlistIsPlaying: true });
        }
    }
    
    pauseSong() {
		this.reactAudioPlayer.current.pause();
		this.setState({ playlistIsPlaying: false });
    }

    goPreviousSong() {
		if(this.props.currentTrack.index === 0){
			this.props.changeCurrentTrack(this.props.queue[this.props.queue.length - 1], this.props.queue.length - 1);
		}
		else {
			this.props.changeCurrentTrack(this.props.queue[this.props.currentTrack.index - 1], this.props.currentTrack.index - 1);
		}
        this.reactAudioPlayer.current.currentTime = 0;
        this.pauseSong();
        this.playSong();
    }
    
    goNextSong() {
		if(this.props.currentTrack.index === this.props.queue.length - 1){
			this.props.changeCurrentTrack(this.props.queue[0], 0);
		}
		else {
			this.props.changeCurrentTrack(this.props.queue[this.props.currentTrack.index + 1], this.props.currentTrack.index + 1);
		}
		this.reactAudioPlayer.current.currentTime = 0;
        this.pauseSong();
        this.playSong();
    }

    onTimeUpdateListener() {
        let currentTime = this.reactAudioPlayer.current.currentTime;
        let currentDuration = this.reactAudioPlayer.current.duration;
        let percent = (currentTime / currentDuration);
        let audioControls = Object.assign({}, this.state.audioControls);
        if (isNaN(percent)) {
          audioControls.songPercent = 0
        } else {
          audioControls.songPercent = percent;
          audioControls.songTime = time(Math.floor(currentTime));
          audioControls.songDuration = time(Math.floor(currentDuration));
        }
        this.setState({ audioControls })
      }

    updateAudioTime(event) {
        event.persist();
        if (this.state.playlist !== undefined && this.state.playlist.length !== 0) {
		  let songPercentage = event.nativeEvent.layerX / window.innerWidth;
          let currentTime = songPercentage * this.reactAudioPlayer.current.duration;
          this.reactAudioPlayer.current.currentTime = currentTime;
          let audioControls = Object.assign({}, this.state.audioControls);
          audioControls.songPercent = songPercentage;
          this.setState({ audioControls });
        }
	}
	  
	updateVolumeLevel(value) {
		this.reactAudioPlayer.current.volume = value / 100;
		this.setState({ volumeLevel: value });
	}
      
}

export default connect(
	state => ({
        currentTrack: state.currentTrack,
        playlist: state.queue,
        queue: state.queue,
	}),
	({
		changeCurrentTrack: (track, index) => ({
            type: "CHANGE_CURRENT_TRACK",
            payload: {
                track_id: track.track_id,
                track_name: track.track_name,
                track_link: track.track_link,
                album_name: track.album_name,
                singer_name: track.singer_name,
                album_year: track.album_year,
                album_img: track.album_img,
                track_time: track.track_time,
                index: index,
        	}
    	}),
        previousTrack: (data) => ({
			type: "PREVIOUS_CURRENT_TRACK",
			payload: data
		}),
        nextTrack: (data) => ({
			type: "NEXT_CURRENT_TRACK",
			payload: data
		}),        
    })
  )(Footer);

// class Footer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             playlist: [],
//             metaPlaylist: null,
//             playlistIsPlaying: false,
//             currentSongIndex: null,
//             showPlaylist: false,
//             showVisualizer: false,
//             audioAnalyser: null,
//             audioControls: {
//                 songPercent: 0,
//                 songTime: '',
//                 songDuration: ''
//             },
// 			volumeLevel: 80,
// 			positionInQueue: 0,
//         }
//         this.reactAudioPlayer = React.createRef();
//         this.updateIsPlaying = this.updateIsPlaying.bind(this);
//         this.goNextSong = this.goNextSong.bind(this);
//         this.goPreviousSong = this.goPreviousSong.bind(this);
//         this.playSong = this.playSong.bind(this);
//         this.pauseSong = this.pauseSong.bind(this);
//         this.onTimeUpdateListener = this.onTimeUpdateListener.bind(this);
//         this.updateAudioTime = this.updateAudioTime.bind(this);
//         this.updateVolumeLevel = this.updateVolumeLevel.bind(this);
//     }

    // componentWillReceiveProps(nextProps) {
    //     console.log("this.state", this.state);
    //     if (nextProps.playlist !== this.props.playlist) {
    //       this.setState({ playlist: nextProps.playlist, currentSongIndex: nextProps.currentSongIndex }, () => {
    //         //if (!this.state.audioAnalyser) this.setAnalyser()
    //         this.reactAudioPlayer.current.volume = this.state.volumeLevel / 100
    //         this.playSong()
    //         //this.getMediaTags()
    //       })
    //     } else if (nextProps.currentSongIndex !== this.props.currentSongIndex) {
    //       this.setState({ currentSongIndex: nextProps.currentSongIndex }, () => {
    //         this.playSong()
    //       })
    //     } else if (nextProps.playlistIsPlaying !== this.props.playlistIsPlaying) {
    //       this.setState({ playlistIsPlaying: nextProps.playlistIsPlaying }, () => {
    //         (this.state.playlistIsPlaying) ? this.playSong() : this.pauseSong()
    //       })
    //     }
    //   }

//     componentDidMount() {
//     }
    
//     render() {
//         return (
//             <footer className="footer" id="footer">
//                 <audio
//                 className="footer__audio"
//                 src={this.props.queue[this.props.currentTrack.index].track_link}
//                 ref={this.reactAudioPlayer}
// 				onTimeUpdate={this.onTimeUpdateListener}
// 				onEnded={this.goNextSong}
// 				autoPlay={true}
//                 />

//                 <FooterSeekbar
//                 updateAudioTime={this.updateAudioTime}
//                 audioControls={this.props.footerData} />

//                 <div className="footer__wrapper">
//                     <FooterControlsLeft
//                     audioControls={this.props.footerData}
//                     playlistIsPlaying={this.props.footerData.playlistIsPlaying}
//                     updateAudioTime={this.updateAudioTime}
//                     goPreviousSong={this.goPreviousSong}
//                     updateIsPlaying={this.updateIsPlaying}
//                     goNextSong={this.goNextSong}
//                     playlist={this.props.playlist}
// 					/>

//                     <FooterTrack
//                     track_name={this.props.currentTrack.track_name}
//                     album_name={this.props.currentTrack.album_name}
//                     singer_name={this.props.currentTrack.singer_name}
//                     album_year={this.props.currentTrack.album_year}
//                     album_img={this.props.currentTrack.album_img}
//                     />

//                     <FooterMore />

//                     <FooterControlsRight
// 					audioControls={this.props.footerData}
// 					volumeLevel={this.props.footerData.volumeLevel}
//               		updateVolumeLevel={this.updateVolumeLevel}
// 					/>
//                 </div>
//             </footer>
//         );
//     }

//     updateIsPlaying() {
// 		this.props.footerData.playlistIsPlaying ? this.pauseSong() : this.playSong();
//     }

//     playSong() {
//         if (this.props.queue !== undefined && this.props.queue.length !== 0) {
// 			console.log("PLAY")
// 			this.props.changeIsPlaying();
			  
//             if (this.reactAudioPlayer.current.play() !== undefined) {
//                 this.reactAudioPlayer.current.play().then(function() {
//             // Automatic playback started!
//             }).catch(function(error) {
//             // Automatic playback failed.
//             });
//             }
//         }
//     }
    
//     pauseSong() {
// 		this.props.changeIsPlaying();
// 		this.reactAudioPlayer.current.pause();
//     }

//     goPreviousSong() {
// 		if(this.props.currentTrack.index == 0){
// 			this.props.changeCurrentTrack(this.props.queue[this.props.queue.length - 1], this.props.queue.length - 1);
// 		}
// 		else {
// 			this.props.changeCurrentTrack(this.props.queue[this.props.currentTrack.index - 1], this.props.currentTrack.index - 1);
// 		}
//         this.reactAudioPlayer.current.currentTime = 0;
//         this.pauseSong();
//         this.playSong();
//     }
    
//     goNextSong() {
// 		if(this.props.currentTrack.index == this.props.queue.length - 1){
// 			this.props.changeCurrentTrack(this.props.queue[0], 0);
// 		}
// 		else {
// 			this.props.changeCurrentTrack(this.props.queue[this.props.currentTrack.index + 1], this.props.currentTrack.index + 1);
// 		}
// 		this.reactAudioPlayer.current.currentTime = 0;
//         this.pauseSong();
//         this.playSong();
//     }

//     onTimeUpdateListener() {
//         let currentTime = this.reactAudioPlayer.current.currentTime;
//         let currentDuration = this.reactAudioPlayer.current.duration;
// 		let percent = (currentTime / currentDuration);

// 		this.props.changeDuration(currentDuration);
// 		this.props.changeTime(currentTime);
// 		this.props.changePercent(percent);

//         // let audioControls = Object.assign({}, this.state.audioControls);
//         // if (isNaN(percent)) {
//         //   audioControls.songPercent = 0
//         // } else {
//         //   audioControls.songPercent = percent;
//         //   audioControls.songTime = time(Math.floor(currentTime));
//         //   audioControls.songDuration = time(Math.floor(currentDuration));
//         // }
//         // this.setState({ audioControls })
//       }

//     updateAudioTime(event) {
//         event.persist();
//         if (this.state.queue !== undefined && this.state.queue.length !== 0) {
// 		  let songPercentage = event.nativeEvent.layerX / window.innerWidth;
//           let currentTime = songPercentage * this.reactAudioPlayer.current.duration;
//           this.reactAudioPlayer.current.currentTime = currentTime;
//           let audioControls = Object.assign({}, this.state.audioControls);
//           audioControls.songPercent = songPercentage;
//           this.setState({ audioControls });
//         }
// 	}
	  
// 	updateVolumeLevel(value) {
// 		this.reactAudioPlayer.current.volume = value / 100;
// 		this.props.changeVolume(value);
// 	}
      
// }

// export default connect(
// 	state => ({
//         currentTrack: state.currentTrack,
// 		queue: state.queue,
// 		footerData: state.footer,
// 	}),
// 	({
// 		changeIsPlaying: () => ({
// 			type: 'CHANGE_FOOTER_IS_PLAYING'
// 		}),
// 		changeDuration: (duration) => ({
// 			type: 'CHANGE_FOOTER_SONG_DURATION',
// 			payload: duration
// 		}),
// 		changeTime: (time) => ({
// 			type: 'CHANGE_FOOTER_SONG_TIME',
// 			payload: time
// 		}),
// 		changePercent: (percent) => ({
// 			type: 'CHANGE_FOOTER_SONG_PERCENT',
// 			payload: percent
// 		}),
// 		changeVolume: (volume) => ({
// 			type: 'CHANGE_FOOTER_VOLUME_LEVEL',
// 			payload: volume
// 		}),
// 		changeCurrentTrack: (track, index) => ({
//             type: "CHANGE_CURRENT_TRACK",
//             payload: {
//                 track_id: track.track_id,
//                 track_name: track.track_name,
//                 track_link: track.track_link,
//                 album_name: track.album_name,
//                 singer_name: track.singer_name,
//                 album_year: track.album_year,
//                 album_img: track.album_img,
//                 track_time: track.track_time,
//                 index: index,
//         	}
//     	}),
//         previousTrack: (data) => ({
// 			type: "PREVIOUS_CURRENT_TRACK",
// 			payload: data
// 		}),
//         nextTrack: (data) => ({
// 			type: "NEXT_CURRENT_TRACK",
// 			payload: data
// 		}),        
//     })
//   )(Footer);
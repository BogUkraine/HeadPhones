import React, {Component} from 'react';
import { connect } from 'react-redux';

import QueueTrack from './QueueTrack';

class QueueList extends Component {
    
    changeTrack(track, index) {  
        this.props.changeCurrentTrack(track, index);        
    }
    
    render() {
        return (
            this.props.queue.map(( value, index ) => {
                return (
                    <QueueTrack
                        track={value}
                        track_id={value.track_id}
                        track_name={value.track_name}
                        album_name={value.album_name}
                        singer_name={value.singer_name}
                        album_year={value.album_year}
                        album_img={value.album_img}
                        track_time={value.track_time}
                        change_track={this.changeTrack.bind(this)}
                        index={index}
                        key={value.track_id}
                    />
                );
            })
        );
    }
}

export default connect(
    state => ({
        queue: state.queue,
    }),
    {
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
    }
)(QueueList);
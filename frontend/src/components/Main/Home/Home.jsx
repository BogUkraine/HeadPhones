import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

import fetchPlaylists from '../../../actions/fetchPlaylists';
import fetchQuote from '../../../actions/fetchQuote';
import fetchTopTracks from '../../../actions/fetchTopTracks';
import playlistsCount from '../../../actions/playlistsCount';

class Home extends Component {
    componentDidMount() {
        this.props.fetchPlaylists(this.props.user.user_id);
        this.props.fetchQuote();
        this.props.fetchTopTracks();
        //this.props.playlistsCount();
    }

    componentDidUpdate() {
        const deepEqual = (arrTracks, arrQueue) => {
            for (let i = 0; i < arrTracks.length; i++){
                if (JSON.stringify(arrTracks[i]) !== JSON.stringify(arrQueue[i])){
                    this.props.changeCheckerTracks(true);
                    break;
                }
            }
        }
        deepEqual(this.props.tracks, this.props.queueData);
    }

    render() {
        return (
            <div className="home">
                <HomeLeft />
                <HomeRight />
            </div>
        );
    }
}

export default connect(
	state => ({
        user: state.user,
        queueTop: state.tracks,
        checkerQueue: state.checkerQueue,
        tracks: state.tracks,
        queueData: state.queue,
    }),
    {
        fetchPlaylists: fetchPlaylists,
        fetchQuote: fetchQuote,
        fetchTopTracks: fetchTopTracks,
        playlistsCount: playlistsCount,
        changeCheckerTracks: (data) => ({
            type: "CHANGE_CHECKER",
            payload: data
        }),
        loadTracks: (data) => ({
            type: "LOAD_TRACKS",
            payload: data
        })
    }
  )(Home);
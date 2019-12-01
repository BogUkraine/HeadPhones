import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

import fetchPlaylists from '../../../actions/fetchPlaylists';
import fetchQuote from '../../../actions/fetchQuote';
import fetchTopTracks from '../../../actions/fetchTopTracks';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            queue: [],
        }
    }
    componentDidMount() {
        this.props.fetchPlaylists(this.props.user.user_id);
        this.props.fetchQuote();
        this.props.fetchTopTracks();
    }

    componentWillUpdate() {
    }

    componentWillUnmount() {
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
    }),
    {
        fetchPlaylists: fetchPlaylists,
        fetchQuote: fetchQuote,
        fetchTopTracks: fetchTopTracks,
        loadTracks: (data) => ({
            type: "LOAD_TRACKS",
            payload: data
        })
    }
  )(Home);
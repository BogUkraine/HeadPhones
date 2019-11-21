import React, { Component } from 'react';
import axios from 'axios';

import ArrayTracks from './ArrayTracks';

const HomeLeft = () => {
    return (
        <div className="home__left">
            <HomeTracks />
        </div>
    );
}

class HomeTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrTracks: [
                {
                    track_id: "",
                    track_link: "",
                    gentre_id: "",
                    album_id: "",
                    track_name: "",
                    track_time: ""
                }
            ]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3210/tracks")
            .then( (response) => {
                this.setState({
                    arrTracks: response.data,
                });
                console.log(this.state.arrTracks);
                console.log(this.state.arrTracks[1].track_name);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const arrayTracks = this.state.arrTracks;

        return (
            <ArrayTracks array={arrayTracks}/>
        );
    }
}

export default HomeLeft;
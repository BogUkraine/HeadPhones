import React, { Component } from 'react';
import axios from 'axios';

class LibraryTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackName: "",
            singer: "",
            album: "",
            year: "",
            link: "",
            arrTracks: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3210/tracks")
            .then( (response) => {
                this.setState({
                    arrTracks: response.data
                });
                console.log(this.state.arrTracks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="library-music-block">
                <div className="library-music-block__track-name-wrapper">
                    <div className="library-music-block__img"></div>
                    <span className="library-music-block__track-name">track_name</span>
                </div>
                <div className="library-music-block__description">
                    <span className="library-music-block__singer">singer</span>&#9679;
                    <span className="library-music-block__album">album</span>&#9679;
                    <span className="library-music-block__year">2019</span>
                </div>
                <div className="library-music-block__time">
                    <span className="">1:01</span>/
                    <span className="">3:30</span>
                </div>
            </div>
        );
    }
}

function LibraryWrapper() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const LibraryTracks = arr.map( () =>
            <LibraryTrack />
    );

    return (
        <div className="library-wrapper-music">
            {LibraryTracks}
        </div>
    );
}


export default LibraryWrapper;
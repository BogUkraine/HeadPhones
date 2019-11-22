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
                    genre_id: "",
                    album_id: "",
                    track_name: "",
                    track_time: ""
                }
            ],
            arrSingers: [
                {
                    sunger_id: "",
                    singer_name: ""
                }
            ],
            arrAlbums: [
                {
                    album_id: "",
                    singer_id: "",
                    album_name: "",
                    album_year: "",
                    album_img: ""
                }
            ],
            arrGenres: [
                {
                    genre_id: "",
                    genre_name: ""
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
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("http://localhost:3210/singers")
            .then( (response) => {
                this.setState({
                    arrSingers: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("http://localhost:3210/albums")
            .then( (response) => {
                this.setState({
                    arrAlbums: response.data,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const arrayTracks = this.state.arrTracks;

        return (
            <ArrayTracks arrayTracks={arrayTracks} />
        );
    }
}

export default HomeLeft;
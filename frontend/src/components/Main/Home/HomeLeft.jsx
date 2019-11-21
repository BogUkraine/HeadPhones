import React, { Component } from 'react';
import axios from 'axios';

const HomeLeft = () => {
    return (
        <div className="home__left">
            <HomeTrack />
        </div>
    );
}

class HomeTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackName: "1",
            singer: "2",
            album: "3",
            year: "4",
            link: "5",
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
        return (
            <div className="home__track">
                <div className="home__track_img"></div>
                <div className="home__track_description">
                    <span className="home__track_name">{this.state.arrTracks[0].track_name}</span>
                    <div className="home__track_wrapper">
                        <span className="home__track_singer">singer</span>
                        <span className="home__track_album">album</span>
                        <span className="home__track_year">2019</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeLeft;
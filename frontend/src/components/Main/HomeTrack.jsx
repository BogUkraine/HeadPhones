import React from 'react';
import axios from 'axios';

const HomeTrack = () => {
    return (
        <div className="home-music-block">
            <div className="home-music-block__img"></div>
            <div className="home-music-block__description">
                <span className="home-music-block__track-name">track_name</span>
                <div className="home-music-block__wrapper">
                    <span className="home-music-block__singer">singer &ensp; &#9679; &ensp;</span>
                    <span className="home-music-block__album">album &ensp; &#9679; &ensp;</span>
                    <span className="home-music-block__year">2019</span>
                </div>
            </div>
        </div>
    );
}

function HomeWrapper() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const HomeTracks = arr.map( () =>
            <HomeTrack />
    );

    return (
        <div className="home-main-left">
            {HomeTracks}
        </div>
    );
}

class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('/api/getList')
        .then(res => {
            const persons = res.data;
            this.setState({persons});
            
        })
    }

}

console.log(PersonList.persons);

export default HomeWrapper;
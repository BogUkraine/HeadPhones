import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchTrack from "./SearchTrack";

class Search extends Component {
    render() {
        return(
            <div className="search">
                {this.props.tracks.length === 0 ?
                    <div className="search__empty">We haven't found this song</div>
                    :
                    <>
                        <div className="search__title">Top result</div>
                        <div className="search__list">
                            {this.props.tracks.map(( value ) => {
                                return (
                                    <SearchTrack
                                        track_name={value.track_name}
                                        album_name={value.album_name}
                                        singer_name={value.singer_name}
                                        album_year={value.album_year}
                                        album_img={value.album_img}
                                        track_time={value.track_time}
                                        key={value.track_id}
                                    />
                                );
                            })}
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        tracks: state.search
    }),
    dispatch => ({})
)(Search);
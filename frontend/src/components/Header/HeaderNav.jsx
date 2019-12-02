import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import addPlaylist from '../../actions/addPlaylist';
import NavPlaylists from './NavPlaylists';
import fetchPickedPlaylist from '../../actions/fetchPickedPlaylist';
import fetchPlaylists from '../../actions/fetchPlaylists';

class Nav extends Component {
    constructor(props){
        super(props);
        this.onClickCreate = this.onClickCreate.bind(this);
    }

    onClickCreate() {
        this.props.addPlaylist(this.props.user.user_id, this.props.playlistsCount.count);
        this.props.pickedPlaylist(this.props.user.user_id, this.props.playlistsCount.count);
        setTimeout(()=>{
            this.props.fetchPlaylistsCount();
            this.props.fetchPlaylists(this.props.user.user_id);
        }, 500)
    }

    render() {
        return (
            <div className="header__navigation">
                <ul className="header__topmenu">
                    <NavLink to="/home">
                        <li className="header__topmenu_item">
                        <span className="header__topmenu_text">
                            Home
                        </span>
                        </li>
                    </NavLink>
                    <NavLink to="/library">
                        <li className="header__topmenu_item">
                        <span className="header__topmenu_text">
                            Library
                        </span>
                        </li>
                    </NavLink>
                    <NavLink to="/playlist">
                        <li className="header__topmenu_item">
                            <span className="header__topmenu_text">Playlist</span>
                            <ul className="header__submenu">
                                <NavPlaylists />
                                {(this.props.playlists.length < 3)
                                ?<li className="header__submenu_item"
                                onClick={this.onClickCreate}>
                                    CreatePlaylist
                                </li>
                                : null
                                }
                            </ul>
                        </li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default connect(
	state => ({
        user: state.user,
        playlists: state.playlists,
        playlistsCount: state.playlistsCount,
    }),
    {
        addPlaylist: addPlaylist,
        fetchPlaylists: fetchPlaylists,
        fetchPlaylistsCount: () => ({
            type: "FETCH_PLAYLISTS_COUNT"
        }),
        pickedPlaylist: () => ({
            type: "FETCH_EMPTY_PICKED_PLAYLIST"
        }),
        fetchPickedPlaylist: fetchPickedPlaylist,
    }
)(Nav);

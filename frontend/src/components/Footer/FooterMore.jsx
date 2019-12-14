import React, { Component } from 'react';
import { connect } from 'react-redux';

class FooterMore extends Component {

    moreEnter(event) {
        const list = document.getElementById('more');
        list.style.left = event.target.getBoundingClientRect().x + 'px';
    }

    addToQueue() {
        const queue = this.props.queueData;
        queue.splice(this.props.currentTrack.index+1, 0, this.props.currentTrack);
        console.log(queue);
        this.props.queue(queue);
    }

    toAlbum(event) {
        event.stopPropagation();
        const addToAlbum = document.getElementById('addToAlbum');
        addToAlbum.style.top = event.target.getBoundingClientRect().y - 100 + 'px';
        addToAlbum.style.left = event.target.getBoundingClientRect().x + 100 + 'px';
        addToAlbum.style.display = 'flex';

        //this.onClickClose(addToAlbum);
    }

    render() {
        return(
            <div className="fa fa-navicon footer__more" onMouseEnter={(event) => this.moreEnter(event)}>
                <ul className="footer__more_submenu" id="more">
                    <li className="footer__more_item" onClick={(e) => {this.toAlbum(e)}}>Add to playlist</li>
                    <li className="footer__more_item" onClick={this.addToQueue.bind(this)}>Add to queue</li>
                    <li className="footer__more_item">Go to album</li>
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        currentTrack: state.currentTrack,
        queueData: state.queue,
    }),
    {
        queue: (data) => ({
            type: "COPY_TRACKS",
            payload: data
        }),
        changeCheckerTracks: (data) => ({
            type: "CHANGE_CHECKER",
            payload: data
        }),
    }
)(FooterMore);
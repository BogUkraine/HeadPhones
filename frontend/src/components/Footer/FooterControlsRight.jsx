import React, {Component} from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class FooterControlsRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShownQueue: false,
            isShownVisualizer: false,
        }
        this.queueClick = this.queueClick.bind(this);
        this.repeatClick = this.repeatClick.bind(this);
        this.shuffleClick = this.shuffleClick.bind(this);
        this.visualizerClick = this.visualizerClick.bind(this);
    }

    queueClick() {
        const queue = document.getElementById('queue');
        if(!this.state.isShownQueue){
            queue.style.display = "flex";
            queue.style.top = "52px";
            this.setState({isShownQueue: true});
        }
        else {
            queue.style.top = "100vh";
            this.setState({isShownQueue: false});
        }
    }

    visualizerClick() {
        const visualizer = document.getElementById('visualizer');
        if(!this.state.isShownVisualizer){
            visualizer.style.display = "flex";
            visualizer.style.top = "52px";
            this.setState({isShownVisualizer: true});
        }
        else {
            visualizer.style.top = "100vh";
            this.setState({isShownVisualizer: false});
        }
    }

    repeatClick(event) {
        if(this.props.footer.repeating) {
            event.target.style.color = '#ddd';
        }
        else {
            event.target.style.color = '#8b8bc7';
        }
        this.props.changeRepeating(!this.props.footer.repeating);
    }

    shuffleClick(event) {
        if(this.props.footer.shuffle) {
            event.target.style.color = '#ddd';
        }
        else {
            event.target.style.color = '#8b8bc7';
        }
        this.props.changeShuffle(!this.props.footer.shuffle);
    }
    
    render() {
        return(
            <div className="footer__controls_right">
                <div className="footer__volume">
                    <div className="footer__volume_seekbar">
                        <Slider min={0} max={100}
                        defaultValue={this.props.volumeLevel}
                        onChange={this.props.updateVolumeLevel}
                        />
                    </div>
                    <button className="control_button footer__volume_button">
                        <span className="fa fa-volume-up" aria-hidden="true"></span>
                    </button>
                </div>
                <span onClick={(event) => this.repeatClick(event)} className="fa fa-refresh" aria-hidden="true" id="repeating"></span>
                <span onClick={(event) => this.shuffleClick(event)} className="fa fa-random" aria-hidden="true" id="shuffle"></span>
                <span onClick={this.visualizerClick} className="fa fa-chart-bar" aria-hidden="true"></span>
                <span onClick={this.queueClick} className="fa fa-caret-up" aria-hidden="true"></span>
            </div>
        )
    }
}

export default connect(state => ({
    currentTrack: state.currentTrack,
    footer: state.footer
}),
{
    changeRepeating: (isRepeat) => ({
        type: 'CHANGE_REPEATING',
        payload: isRepeat
    }),
    changeShuffle: (isShuffle) => ({
        type: 'CHANGE_SHUFFLE',
        payload: isShuffle
    }),
}
)(FooterControlsRight);
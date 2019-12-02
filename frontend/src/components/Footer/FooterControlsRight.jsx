import React, {Component} from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class FooterControlsRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShownQueue: false
        }
        this.queueClick = this.queueClick.bind(this);
    }

    queueClick() {
        const queue = document.getElementById('queue');
        
        if(!this.state.isShownQueue){
            queue.style.display = "flex";
            queue.style.top = "52px";
            this.setState({isShownQueue: true});
            console.log(this.state.isShownQueue);
        }
        else {
            queue.style.display = "flex";
            queue.style.top = "calc(100vh - 70px)";
            this.setState({isShownQueue: false});
        }
        
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
                <button onClick="" className="control_button footer__repeat">
                    <span className="fa fa-refresh" aria-hidden="true"></span>
                </button>
                <button onClick="" className="control_button footer__shuffle">
                    <span className="fa fa-random" aria-hidden="true"></span>
                </button>
                <button onClick={this.queueClick} className="control_button footer__queue">
                    <span className="fa fa-caret-up" aria-hidden="true"></span>
                </button>
            </div>
        )
    }
}

export default connect(state => ({
    currentTrack: state.currentTrack,

}),
{}
)(FooterControlsRight);
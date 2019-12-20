import React, {Component} from 'react';

class FooterSeekbar extends Component {
    constructor() {
        super()
        this.state = {
          height: ''
        }
    }
    
    render() {
        return(
            <div className="footer__seekbar" onClick={this.props.updateAudioTime}>
                <div
                className="footer__seekbar_loaded"
                style={{'width': this.props.audioControls.songPercent * 100 + '%'}}
                ></div>
            </div>
        );
    }
}

export default FooterSeekbar;
import React, { Component } from 'react';
import './FlatCircleButtons.css';

class ShotButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <button className="flatCircleButton"
                        onKeyDown={this.props.actionStart}
                        onKeyUp={this.props.actionStop}
                        onMouseDown={this.props.actionStart}
                        onMouseLeave={this.props.actionStop}
                        onMouseOut={this.props.actionStop}
                        onMouseUp={this.props.actionStop}
                        >
                    <img
                        className="flatCircleButton"
                        src="/images/Cicle-50percent-opacity.png"
                        alt="S"/>
                </button>
                );
    }
};

export default ShotButton;
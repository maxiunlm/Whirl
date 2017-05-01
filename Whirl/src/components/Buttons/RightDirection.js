import React, { Component } from 'react';

class RightDirection extends Component {
    /*constructor(props) {
     super(props);
     }*/

    render() {
        return (
                <button id="rightDirection"
                        onKeyDown={this.props.actionStart}
                        onKeyUp={this.props.actionStop}
                        onMouseDown={this.props.actionStart}
                        onMouseLeave={this.props.actionStop}
                        onMouseOut={this.props.actionStop}
                        onMouseUp={this.props.actionStop}
                        >&gt;</button>
                );
    }
}

export default RightDirection;

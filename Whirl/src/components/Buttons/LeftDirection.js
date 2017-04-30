import React, { Component } from 'react';

class LeftDirection extends Component {
    /*constructor(props) {
     super(props);
     }*/

    render() {
        return (
                <button id="leftDirection"
                        onMouseDown={this.props.actionStart}
                        onMouseLeave={this.props.actionStop}
                        onMouseOut={this.props.actionStop}
                        onMouseUp={this.props.actionStop}
                        >&lt;</button>
                );
    }
}

export default LeftDirection;
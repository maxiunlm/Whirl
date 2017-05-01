import React, { Component } from 'react';

class LeftDirection extends Component {
    /*constructor(props) {
     super(props);
     }*/

    render() {
        return (
                <button id="leftDirection"
                        onKeyDown={this.props.actionStart}
                        onKeyUp={this.props.actionStop}
                        onMouseDown={this.props.actionStart}
                        onMouseLeave={this.props.actionStop}
                        onMouseOut={this.props.actionStop}
                        onMouseUp={this.props.actionStop}
                        >&lt;</button>
                );
    }
}

export default LeftDirection;
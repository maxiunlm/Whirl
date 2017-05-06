import React, { Component } from 'react';

class RightDirection extends Component {
    /*constructor(props) {
     super(props);
     }*/

    render() {
        return (
                <img id="rightDirection"
                        src="/images/Cicle-50percent-opacity.png"
                        alt="&gt;"
                        onKeyDown={this.props.actionStart}
                        onKeyUp={this.props.actionStop}
                        onMouseDown={this.props.actionStart}
                        onMouseLeave={this.props.actionStop}
                        onMouseOut={this.props.actionStop}
                        onMouseUp={this.props.actionStop}
                        />
                );
    }
}

export default RightDirection;

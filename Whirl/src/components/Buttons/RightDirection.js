import React, { Component } from 'react';

class RightDirection extends Component {
    /*constructor(props) {
        super(props);
    }*/
    
    render () {        
        return (
            <button id="rightDirection" onClick={this.props.action}>&gt;</button>
        );
    }
};

export default RightDirection;

import React, { Component } from 'react';

class LeftDirection extends Component {
    /*constructor(props) {
        super(props);
    }*/
    
    render () {        
        return (
                <button id="leftDirection" onClick={this.props.action}>&lt;</button>
        );
    }
};

export default LeftDirection;
import React, { Component } from 'react';

class EditHeaderCheckItem extends Component{
    render() {
        return(
            <button className='EditHeaderCheckItem' onClick={this.props.onClick}>EDIT</button>
        );
    }
};

export default EditHeaderCheckItem ;


import React, { Component } from 'react';

class RemoveHeaderCheckItem extends Component {
    render() {
        return(
            <button onClick={this.props.onClick} className='btnRemoveHeaderCheckItem'><span >&times;</span></button>
        );
    }
}

export default RemoveHeaderCheckItem;
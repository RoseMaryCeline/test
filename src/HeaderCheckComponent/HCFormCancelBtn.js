import React, { Component } from 'react';

class HCFormCancelBtn extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className='HeaderCheckFormCancelBtn'>Anuluj</button>
        );
    }
};

export default HCFormCancelBtn;
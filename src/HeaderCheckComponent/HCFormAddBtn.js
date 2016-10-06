import React, { Component } from 'react';

class HCFormAddBtn extends Component {
    render() {
        return(
            <button 
                onBlur={this.props.onBlur} 
                disabled={this.props.disabled}  
                onClick={this.props.onClick} 
                className={this.props.className}>{this.props.label}</button>
        );
    }
}; 

export default HCFormAddBtn;
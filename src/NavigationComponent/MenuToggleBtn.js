import React, {Component} from 'react';

class MenuToggleBtn extends Component {
    render() {
        let arrowClass = this.props.extended ? 'fa-angle-double-left' : 'fa-angle-double-right'
        return (
            <button className='MenuToggleBtn' onClick={this.props.onClick}>
                <i className={`fa ${arrowClass}`} />
            </button>
        );
    }
}

export default MenuToggleBtn;
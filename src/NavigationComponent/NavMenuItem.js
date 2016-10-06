import React, {Component} from 'react';
import {Link} from 'react-router';

class NavMenuItem extends Component {
    render() {
        const labelClass = (this.props.extended) ? 'NavMenuItemLabel' : 'NavMenuItemLabel hidden';
        return (
            <li className="NavMenuItem">
                <Link className='NavMenuItemLink' to={this.props.item.link}>
                    <i className={`fa ${this.props.item.icon}`} />
                    <span className={labelClass}> {this.props.item.label} </span>
                </Link>
            </li>
        );
    }
};

export default NavMenuItem;
import React, {Component} from 'react';
import NavMenuItem from './NavMenuItem';

class NavMenu extends Component {
    render() {
        return (

            <ul className='NavMenu'>
                {this.props.items.map((item, index) => <NavMenuItem item={item} extended={this.props.extended} key={index}/>) }
            </ul>

        );
    }
};

export default NavMenu;
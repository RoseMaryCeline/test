import React, {Component} from 'react';
import NavMenu from './NavMenu';
import MenuToggleBtn from './MenuToggleBtn';
import '../App.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extended: false
        };
        this.toggleDescriptions = this.toggleDescriptions.bind(this);
    }
    toggleDescriptions() {
        this.setState({
            extended: !this.state.extended
        });
    }
    render() {
        let items = [
            {
                icon: 'fa fa-header',
                label: 'Header Checks',
                link: '/header_checks'

            },
            {
                icon: 'fa fa-paper-plane',
                label: 'ThirdComponent',
                link: '/third'

            },
            {
                icon: 'fa fa-plug',
                label: 'FourthComponent',
                link: '/fourth'

            },
            {
                icon: 'fa fa-sign-in',
                label: 'FifthComponent',
                link: '/fifth'
            },
            {
                icon: 'fa fa-sticky-note',
                label: 'Create',
                link: '/create'
            },
            {
                icon: 'fa fa-tag',
                label: 'Add new item',
                link: '/add_new'
            },
            {
                icon: 'fa fa-signal',
                label: 'Make a distinction',
                link: '/distinction'
            },
            {
                icon: 'fa fa-star-half-o',
                label: 'Add to favourites',
                link: '/favourites'
            },
            {
                icon: 'fa fa-shield',
                label: 'Edit options',
                link: '/edit'
            },
            {
                icon: 'fa fa-map',
                label: 'Show more',
                link: '/show'
            }
        ];

        const className = (this.state.extended) ? 'Nav NavExtended' : 'Nav NavNarrow';

        return (
            <div className={className}>
                <NavMenu items={items} extended={this.state.extended} />
                <MenuToggleBtn onClick={this.toggleDescriptions} extended={this.state.extended}/>
            </div>
        );
    }
}
export default Nav;

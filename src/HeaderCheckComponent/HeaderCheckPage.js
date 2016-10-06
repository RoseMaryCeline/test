
import React, { Component } from 'react';
import box from '../Box';
import HeaderCheckContainer from './HeaderCheckContainer';
import HeaderCheckTitle from './HeaderCheckTitle';
// import TestContainer from '.TestContainer';

class HeaderCheckPage extends Component {
     render() {
        return (
            <div className='wrapper'>
                <div className='HeaderCheckPage'>
                    <HeaderCheckTitle />
                    <HeaderCheckContainer />
                </div>
                {this.props.children}
            </div>
        );
    }
};

export default box(HeaderCheckPage);

import React,  { Component } from 'react';
import box from '../Box';
import ThirdComponentTitle from './ThirdComponentTitle';
import ThirdComponentContent from './ThirdComponentContent';

class ThirdComponent extends Component {
    render() {
        return(
             <div className='distinctive'>
                <ThirdComponentTitle/>
                <ThirdComponentContent />
            </div>
        );
    }
};

export default box(ThirdComponent);
import React, { Component } from 'react';
import box from '../Box';
class FourthComponent extends Component {
    render() {
        return (
            <h1>Hejka bede sobie trzecim componentem</h1>
        );
    }
};

export default box(FourthComponent);
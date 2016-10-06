import React, { Component } from 'react';

class ThirdComponentContent extends Component {
    render( ){
        return(
                <form className='ThirdComponentContentForm'>
                    <label>Testuj</label>
                    <textarea placeholder='Type here'></textarea>
                    <button className=''>TESTUJ</button>
                </form>
        );
    }
};

export default ThirdComponentContent;
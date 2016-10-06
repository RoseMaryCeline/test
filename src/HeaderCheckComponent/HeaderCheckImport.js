import React, { Component } from 'react';
import box from '../Box';
import * as actions from '../actions';
import { connect } from 'react-redux';

class HeaderCheckImport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaVal: ''
        }
        this.holdValue = this.holdValue.bind(this);
        this.handleValue=this.handleValue.bind(this);
    }
    holdValue(e) {
        this.setState({
            textAreaVal:e.target.value
        });
    }
    handleValue(){
        let result=this.state.textAreaVal;
        let json=JSON.parse(result);
        console.log(json);
        let json1=JSON.stringify(json);
        // console.log(json1);
        // console.log('te dane wysle jako' + ' ' + typeof json + 'do bazy');
        //teraz wyslac ten obiekt do bazy danych jako kolejny obiekt
        console.log('tutuaj'+ " " + json)
        console.log('z metoda stringufy' + " " + json1);
        console.log(json1);



        //     let result=this.state.textAreaVal;
        
        // // console.log(result);
        // // let result1=JSON.stringify(result);
        // let json=JSON.parse(result);
        // console.log(json)
        // console.log(typeof json);
        
        // // console.log('zerowa' + ' ' + result);
        // // let result1=JSON.stringify(result);

        // // console.log('piersza' + ' ' + result1);
        // // let result2=JSON.parse(result1)
        // // console.log('druga' + ' ' + result1);
        // //to co mamy w textarea musi zostac sparsowane a potem wyslane do db
        // // JSON.parse(result);
        
    }
    render() {
       
        return (
            <div className='HeaderCheckImport'>
                <label></label>
                <textarea className='HeaderCheckImportTextarea' onChange={this.holdValue} type='text'></textarea>
                <button onClick={()=> this.props.handleData} className='HeaderCheckImportBtn'>Importuj</button>
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => ({
      handleData: (data) => dispatch(actions.importData(data)),
});

export default box(connect(null,mapDispatchToProps)(HeaderCheckImport), '/header_checks');



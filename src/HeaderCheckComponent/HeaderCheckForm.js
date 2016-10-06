import React, { Component } from 'react';
import HCFormCancelBtn from './HCFormCancelBtn';
import HCFormAddBtn from './HCFormAddBtn';
import box from '../Box';
import * as actions from '../actions';//w ten sposob importuje wszystkie actioncreators i zeby miec do nich dostep musze tylko dodac actions, tak jak sobie to tutaj zdefiniowalam
import { connect } from 'react-redux';

class HeaderCheckForm extends Component {
    constructor(props) {
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValueChange(event) {
        const data = {
            [event.target.name]: event.target.value
        };
        this.props.handleFieldUpdate(data);
    }
    handleSubmit() {
        if (this.props.values.id) {
            this.props.handleEdit(this.props.values);
        } else {
            this.props.handleCreate(this.props.values);
        }
    }
    render() {
        const {id, regexp, type, score} = this.props.values;
        let toggleClassNameHCFormAddBtn= this.props.values.id ? 'HeaderCheckFormSaveBtn':'HeaderCheckFormAddBtn';
        return (
            <div className='HeaderCheckForm'>
                <label>Wyrażenie regularne</label>
                <input className='HCInput' type='text' placeholder='.*viagra' name="regexp" value={regexp} onChange={this.handleValueChange}/>
                <fieldset>Nie dodajemy '/' na początku i na końcu wyrażenia</fieldset>
                <label>Nagłówek</label>
                <input className='HCInput' type='text' placeholder='Subject' name="type" value={type} onChange={this.handleValueChange} />
                <label>Mnożnik</label>
                <input className='HCInput' type='text' placeholder='1' name="score" value={score} onChange={this.handleValueChange} />
                <HCFormAddBtn onClick={this.handleSubmit} className={toggleClassNameHCFormAddBtn} label={id ? 'Zapisz' : 'Dodaj'}/>
                <HCFormCancelBtn onClick={this.props.handleCancelClick} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        values: state.formInputs
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleNewItems: (newItem) => dispatch(actions.addItem(newItem)),
    handleCancelClick: () => dispatch(actions.clearForm()),
    handleFieldUpdate: (data) => dispatch(actions.updateForm(data)),
    handleEdit: (item) => dispatch(actions.editItemRequest(item)),
    handleCreate: (item) => dispatch(actions.addItemRequest(item))
});

export default box(connect(mapStateToProps, mapDispatchToProps)(HeaderCheckForm), '/header_checks');

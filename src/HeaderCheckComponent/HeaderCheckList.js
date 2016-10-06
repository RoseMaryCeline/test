import React, { Component } from 'react';
import { connect } from 'react-redux';
import RemoveHeaderCheckItem from './RemoveHeaderCheckItem';
import EditHeaderCheckItem from './EditHeaderCheckItem';
// import { removeItemRequest, editItem} from '../actions';
import * as actions from '../actions';
import { push } from 'react-router-redux';

class HeaderCheckList extends Component {
    createListItems() {
        return this.props.handleHeaderCheckItems.map((item) => {
            return (
                <li className='HeaderCheckListItem' key={item.id}>
                    <div><h4>{item.regexp}</h4> <EditHeaderCheckItem onClick={()=>{this.props.handleEditItems(item); this.props.handleLinkToForm()}} /></div>
                    <div className='HeaderCheckListItemGroupButtons'>
                        <button  className='btn btnType'>{item.type}</button>
                        <button  className='btn btnId'>{item.id}</button>
                        <button  className='btn btnAuthor' >{item.author}</button>
                        <button  className='btn btnCreatedAt' >{item.createdAt}</button>
                        <button  className='btn btnScore' >{item.score}</button>
                        <RemoveHeaderCheckItem onClick={() => this.props.handleRemoveItems(item.id) }/>
                    </div>
                </li>
            )
        });
    }
    render() {

        return (
            <ul className='HeaderCheckList'>
                {this.createListItems() }
            </ul>
        );
    }
};

function mapStateToProps(state) {
    return {
        handleHeaderCheckItems: state.headerCheckItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemoveItems: itemId => dispatch(actions.removeItemRequest(itemId)),
        handleEditItems: item => dispatch(actions.editItem(item)),
        handleLinkToForm: routing => dispatch(push('/header_checks/form')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCheckList);

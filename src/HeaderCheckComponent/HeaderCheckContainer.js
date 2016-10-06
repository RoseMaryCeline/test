import React, { Component } from 'react';
import HeaderCheckList from './HeaderCheckList';
import '../App.scss';
import { connect } from 'react-redux';
import { loadItems } from '../actions'

class HeaderCheckContainer extends Component {
    componentWillMount() {
        this.props.loadItemsHandle();
    }
    render() {
        return (
            <HeaderCheckList />
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    loadItemsHandle: () => dispatch(loadItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCheckContainer);
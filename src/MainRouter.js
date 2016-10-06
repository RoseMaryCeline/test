import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//mainComponents
import HeaderCheckPage from './HeaderCheckComponent/HeaderCheckPage';
import ThirdComponent from './SecondComponent/ThirdComponent';
import FourthComponent from './ThirdComponent/FourthComponent';
//nested routes
import HeaderCheckForm from './HeaderCheckComponent/HeaderCheckForm';
import HeaderCheckImport from './HeaderCheckComponent/HeaderCheckImport';
import HeaderCheckExport from './HeaderCheckComponent/HeaderCheckExport';
import App from './NavigationComponent/App';
import store from './storeState/store';

const Info = () => <h1>Info</h1>
//here i create an enhanced history
const history=syncHistoryWithStore(browserHistory,store)

class MainRouter extends Component {
    render() {
        return (
            <Router history={history} >
                <Route path='/' component={App} >
                    <Route path='header_checks' component={HeaderCheckPage} >
                        <Route path='form' component={HeaderCheckForm} />
                        <Route path='import' component={HeaderCheckImport} />
                        <Route path='export' component={HeaderCheckExport} />
                    </Route>
                    <Route path='third' component={ThirdComponent} />
                    <Route path='fourth' component={FourthComponent} />
                    <Route path='info' component={Info} />
                </Route>
            </Router>
        );
    }
};

export default MainRouter;



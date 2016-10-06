import React, { Component } from 'react';
import { Link } from 'react-router';
import box from '../Box';
class HeaderCheckTitle extends Component {
    render() {
        
        return (
            <div className='HeaderCheckTitle'>
                <h1>Header Checks</h1>
                <Link className='HeaderCheckAddBtn iconAdd' to="/header_checks/form"><span className='eff-4'>Dodaj</span></Link>
                <Link className='HeaderCheckImportBtn' to='/header_checks/import'>Import</Link>
                <Link className='HeaderCheckExportBtn' to='/header_checks/export'>Export</Link>
                 {this.props.children}
            </div>
        );
    }
};

export default box(HeaderCheckTitle);

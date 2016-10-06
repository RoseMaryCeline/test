import React, { Component } from 'react';
import box from '../Box';


class HeaderCheckExport extends Component {
    render() {
        return (
            <div className='HeaderCheckExport'>
                <label>Title for Export </label>
                <textarea className='HeaderChcekExportTextarea' type='text' placeholder=''></textarea>
                <button className='HeaderChcekExportBtn'>EXPORTUJ</button>
            </div>
        );
    }
};
export default box((HeaderCheckExport), '/header_checks');
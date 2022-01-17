import React from 'react';
import './line-list.css';

import LineListItem from '../line-list-item/line-list-item.js';

const LineList = () => {
    return (
        <div className={'line-list_container'}>
             <LineListItem/>
            <LineListItem/>
            <LineListItem/>
            <LineListItem/>
            <LineListItem/>
            <LineListItem/>

        </div>
       
    )
}

export default LineList;
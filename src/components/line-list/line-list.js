import React from 'react';
import './line-list.css';

import LineListItem from '../line-list-item/line-list-item.js';

const LineList = () => {
    return (
        <div className={'line-list_container'}>
             <LineListItem/>
        </div>
       
    )
}

export default LineList;
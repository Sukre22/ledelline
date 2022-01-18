import React from 'react';
import './line-list.css';

import LineListItem from '../line-list-item/line-list-item.js';

const LineList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item;
        return (
            <>
                <LineListItem
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                />

            </>

        )
    });

    return (
        <div className={'line-list_container'}>
            {elements}
        </div>
       
    )
}

export default LineList;
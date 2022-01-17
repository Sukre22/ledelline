import React from 'react';
import './line-list-item.css';

const LineListItem = () => {
    return (
        <div className={'line-list-item_container'}>
             <h2 className={'line-list-item_container-description'}>Линия №1</h2>
             <div clasccName={'line-list-item_container-wrap'}>

                 <div className={'line-list-item_container-wrap-results'}>
                        <h2 className={'line-list-item_container-wrap-results-head'}>Полученные результаты:</h2>
                        <div className={'line-list-item_container-wrap-results-wrapper'}>
                              111111111111111111111111111111111111111111
                        </div>
                 </div>

             </div>
             <button className={'line-list-item_container-button'}>Удалить линию</button>
        </div>
       
    )
}

export default LineListItem;
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
                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Светодиодные модули:</h2>
                        <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                            <li>L-line A 0,25 - 1 шт.</li>
                            <li>L-line A 0,5 - 1шт.</li>
                            <li>L-line A 1 - 1 шт.</li>
                            <li>L-line A 1,5 - 1 шт.</li>
                            <li>L-line A 3 - 1 шт.</li>
                        </ul>
                        </div>
                 </div>

             </div>
             <button className={'line-list-item_container-button'}>Удалить линию</button>
        </div>
       
    )
}

export default LineListItem;
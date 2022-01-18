import React, {Component} from 'react';
import './line-list-item.css';



export default class LineListItem extends Component {
    render() {
        const {length, number, lineA3, lineA15, lineA1, lineA05, lineA025, bp320, bp240, bp150, onDelete} = this.props;
        return (
            <div className={'line-list-item_container'}>
                <h2 className={'line-list-item_container-description'}>Линия №{number} - {length} м</h2>
                <div className={'line-list-item_container-wrap'}>

                    <div className={'line-list-item_container-wrap-results'}>
                        <h2 className={'line-list-item_container-wrap-results-head'}>Полученные результаты:</h2>
                        <div className={'line-list-item_container-wrap-results-wrapper'}>
                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Светодиодные модули:</h2>
                            <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                                <li>L-line A 3 - {lineA3} шт.</li>
                                <li>L-line A 1,5 - {lineA15} шт.</li>
                                <li>L-line A 1 - {lineA1} шт.</li>
                                <li>L-line A 0,5 - {lineA05} шт.</li>
                                <li>L-line A 0,25 - {lineA025} шт.</li>
                            </ul>

                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Блоки питания:</h2>
                            <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                                <li>БП320 - {bp320} шт.</li>
                                <li>БП240 - {bp240} шт.</li>
                                <li>БП150 - {bp150} шт.</li>

                            </ul>

                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Номиналы резисторов:</h2>
                            <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                                <li>37 кОм - 1 шт.</li>
                                <li>27 кОм - 1 шт.</li>

                            </ul>
                        </div>
                    </div>

                </div>
                <button
                    className={'line-list-item_container-button'}
                    onClick={onDelete}>
                    Удалить линию
                </button>
            </div>
        )
    }
}



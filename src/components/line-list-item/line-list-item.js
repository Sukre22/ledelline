import React, {Component} from 'react';
import './line-list-item.css';



export default class LineListItem extends Component {
    render() {
        const {number, bp, res, modules, lineLength, onDelete} = this.props;


        const listItems = Object.entries(bp).map(([key, value]) =>
            <li>{key} - {value} шт.</li>
        )

        const listItems2 = Object.entries(res).map(([key, value]) =>
            <li>{key} кОм - {value} шт.</li>
        );

        const filteredModules = modules.filter(item => item[1] > 0);

        const listItems3 = filteredModules.map(([key, value]) =>
        <li>{key} - {value} шт.</li>
    );



        return (
            <div className={'line-list-item_container'}>
                <h2 className={'line-list-item_container-description'}>Линия №{number} - {lineLength} м</h2>
                <div className={'line-list-item_container-wrap'}>

                    <div className={'line-list-item_container-wrap-results'}>
                        <h2 className={'line-list-item_container-wrap-results-head'}>Полученные результаты:</h2>
                        <div className={'line-list-item_container-wrap-results-wrapper'}>
                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Светодиодные модули:</h2>
                            <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                            {listItems3}
                            </ul>

                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Блоки питания:</h2>
                            <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                                {listItems}


                            </ul>

                            <h2 className={'line-list-item_container-wrap-results-wrapper-h2'}>Номиналы резисторов:</h2>
                            <ul className={'line-list-item_container-wrap-results-wrapper-modules'}>
                                {listItems2}


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



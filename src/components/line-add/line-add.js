import React from 'react';
import './line-add.css';

const LineAdd = () => {
    return (
     <div className={'input-container'}>
        <div className={'input-container_wrap'}>
            <div className={'input-container_wrap-get'}>
                <h2 className={'input-container_wrap-get-h2'}>Введите длину линии (м):</h2>
                <input type="text"/>
            </div>
        <div className={'input-container_wrap-description'}>
            <p> Внимание! Длина непрерывной линии не должна превышать 12 м и должна быть кратна 0,25 м.</p>
        </div>
            <div className={'input-container_wrap-buttons'}>
                <button>Добавить новую линию</button>
                <button>Вывести общую спецификацию</button>
            </div>
        </div>
     </div>
    )
}

export default LineAdd;
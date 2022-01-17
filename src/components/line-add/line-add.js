import React from 'react';
import './line-add.css';

const LineAdd = () => {
    return (
     <div className={'input-container'}>        
            <div className={'input-container_get'}>
                <h2 className={'input-container_get-h2'}>Введите длину линии (м):</h2>
                <input className={'input-container_get-area'} type="text" placeholder='7.5'/>
            </div>
        <div className={'input-container_description'}>
            <p> Внимание! Длина непрерывной линии не должна превышать 12 м и должна быть кратна 0,25 м.</p>
        </div>
            <div className={'input-container_buttons'}>
                <button>Добавить новую линию</button>
                <button>Вывести общую спецификацию</button>
            </div>        
     </div>
    )
}

export default LineAdd;
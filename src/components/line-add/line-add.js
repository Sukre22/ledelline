import React from 'react';
import './line-add.css';

const LineAdd = () => {
    return (
     <div className={'input-container'}>
         <div className={'input-container_wrap'}>
             <div className={'input-container_description'}>
                 <p> Внимание! Длина непрерывной линии не должна превышать 12 м и должна быть кратна 0,25 м.</p>
             </div>
             <div className={'input-container_get'}>
                 <h2 className={'input-container_get-h2'}>Введите длину линии (м):</h2>
                 <input className={'input-container_get-area'} type="text" placeholder='10.25'/>
             </div>

             <div className={'input-container_buttons'}>
                 <button className={'input-container_buttons-first'}>Добавить новую линию</button>
                 <button>Вывести общую спецификацию</button>
             </div>
         </div>
         <div className={'input-container_number'}>
             <p className={'input-container_number-p1'}>*длина линии должна быть кратна 0,25 м</p>
             <p className={'input-container_number-p2'}>Колличество линий: 0</p>
         </div>


     </div>
    )
}

export default LineAdd;
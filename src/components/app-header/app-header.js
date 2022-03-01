import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return (
        <header className='header'>
            <h1 className={'header-name'}>КАЛЬКУЛЯТОР ДЛЯ РАСЧЕТА СВЕТОДИОДНЫХ МОДУЛЕЙ «L-LINE A» И ИХ КОМПЛЕКТУЮЩИХ</h1>
            <div className={'header-description'}>
                <div className={'header-description_container'}>
                    <div className={'header-description_types'}>
                        <h2 className={'header-description_types-head'}>Линейка светодиодных модулей:</h2>
                        <ul className={'header-description_types-head-ul'}>
                        <li>L-line A 3 (3000 мм)</li>
                        <li>L-line A 1,5 (1500 мм)</li>
                        <li>L-line A 1 (1000 мм)</li>
                        <li>L-line A 0,5 (500 мм)</li>
                        <li>L-line A 0,25 (250 мм)</li>                    
                           
                            
                            
                            
                        </ul>
                    </div>
                    <div className={'header-description_bp'}>
                        <h2 className={'header-description_types-head'}>Применяемые блоки питания:</h2>
                        <ul>
                            <li>БП150 (3,2 А)</li>
                            <li>БП240 (5 А)</li>
                            <li>БП320 (6,7 А)</li>
                        </ul>
                    </div>
                </div>

                <img className="header-description_img" src={process.env.PUBLIC_URL + '/img.jpg'} alt="L-line" />
            </div>
        </header>

    )
}

export default AppHeader;
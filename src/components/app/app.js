import React from 'react';
import './app.css';

import AppHeader from '../app-header/app-header.js';
import LineAdd from '../line-add/line-add.js';

const App = () => {
    return(
        <div className={'container row'}>
            <AppHeader/>
            <LineAdd/>
        </div>
    )
}

export default App;

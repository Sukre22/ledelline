import React from 'react';
import './app.css';

import AppHeader from '../app-header/app-header.js';
import LineAdd from '../line-add/line-add.js';
import LineList from '../line-list/line-list.js';

const App = () => {
    return(
        <div className={'container row'}>
            <AppHeader/>
            <LineAdd/>
            <LineList/>
        </div>
    )
}

export default App;

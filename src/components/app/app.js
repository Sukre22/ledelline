import React, {Component} from 'react';
import './app.css';

import AppHeader from '../app-header/app-header.js';
import LineAdd from '../line-add/line-add.js';
import LineList from '../line-list/line-list.js';
import LineResults from '../line-results/line-results.js';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [


            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 1;
        this.maxNumber = 1;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            id: this.maxId++,
            number: this.maxNumber++,
            length: 33,
            lineA3: 2,
            lineA15: 1,
            lineA1: 3,
            lineA05: 4,
            lineA025: 0,
            bp320: 1,
            bp240: 2,
            bp150: 1
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return(
            <div className={'container row'}>
                <AppHeader/>
                <LineAdd
                    onAdd={this.addItem}/>
                <LineResults/>
                <LineList
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
            </div>
        )
    }
}










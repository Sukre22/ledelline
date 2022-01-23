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
        // номенклатура светильников по длине
        const lineFirst = 3;
        const lineSecond = 1.5;
        const lineThird = 1;
        const lineFourth = 0.5;
        const lineFifth = 0.25;

//номенклатура резисторов в кОм ряд Е12
        /*const resistorsArr = [
            1, 1.2, 1.5, 1.8, 2.2,
            2.7, 3.3, 3.9, 4.7, 5.6,
            6.8, 8.2, 10, 12, 15,
            18, 22, 27, 33, 39,
            47, 56, 68, 82, 100,
            120, 150, 180, 220
        ];*/

//номенклатура резисторов в кОм ряд Е96
        const resistorsArr = [
            1, 1.02, 1.05, 1.07, 1.1, 1.13, 1.15, 1.18,
            1.21, 1.24, 1.27, 1.3, 1.33, 1.37, 1.4, 1.43,
            1.47, 1.5, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74,
            1.78, 1.82, 1.87, 1.91, 1.96, 2, 2.05, 2.1,
            2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55,
            2.61, 2.67, 2.74, 2.8, 2.87, 2.94, 3.01, 3.09,
            3.16, 3.24, 3.32, 3.4, 3.48, 3.57, 3.65, 3.74,
            3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53,
            4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49,
            5.62, 5.76, 5.9, 6.04, 6.19, 6.34, 6.49, 6.65,
            6.81, 6.98, 7.15, 7.32, 7.5, 7.68, 7.87, 8.06,
            8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76,
            10, 10.2, 10.5, 10.7, 11, 11.3, 11.5, 11.8,
            12.1, 12.4, 12.7, 13, 13.3, 13.7, 14, 14.3,
            14.7, 15, 15.4, 15.8, 16.2, 16.5, 16.9, 17.4,
            17.8, 18.2, 18.7, 19.1, 19.6, 20, 20.5, 21,
            21.5, 22.1, 22.6, 23.2, 23.7, 24.3, 24.9, 25.5,
            26.1, 26.7, 27.4, 28, 28.7, 29.4, 30.1, 30.9,
            31.6, 32.4, 33.2, 34, 34.8, 35.7, 36.5, 37.4,
            38.3, 39.2, 40.2, 41.2, 42.2, 43.2, 44.2, 45.3,
            46.4, 47.5, 48.7, 49.9, 51.1, 52.3, 53.6, 54.9,
            56.2, 57.6, 59, 60.4, 61.9, 63.4, 64.9, 66.5,
            68.1, 69.8, 71.5, 73.2, 75, 76.8, 78.7, 80.6,
            82.5, 84.5, 86.6, 88.7, 90.9, 93.1, 95.3, 97.6,
            100, 102, 105, 107, 110, 113, 115, 118, 121, 124,
            127, 130, 133, 137, 140, 143, 147, 150, 154, 158
        ];

//искомое значение резистора в кОм
        let resistorTrue;

// переменные для получения количества светильников в заданной линии
        let lineFirstRes;
        let lineFirstResNext;
        let lineSecondRes;
        let lineSecondResNext;
        let lineThirdRes;
        let lineThirdResNext;
        let lineFourthRes;
        let lineFourthResNext;
        let lineFifthRes;


//блоки питания
        const BP320 = 6.7;
        const BP240 = 5;
        const BP150 = 3.2;

//искомый блок питания
        let BPTarget;

//значение тока на 1м
        const amperage = 0.48;

//искомое значение тока
        let amperageValue;


//длина линии
        let totalLine;

        let generalFunction = function () {

            function CalcLampType(a) {


                if (a < lineFirst) {
                    lineFirstRes = 0;
                    lineFirstResNext = a;
                }

                else {
                    lineFirstResNext = a % lineFirst;
                    lineFirstRes = (a - lineFirstResNext ) / lineFirst;
                }

                if (lineFirstResNext < lineSecond ) {
                    lineSecondRes = 0;
                    lineSecondResNext = lineFirstResNext ;
                }

                else {
                    lineSecondResNext = lineFirstResNext % lineSecond;
                    lineSecondRes = (lineFirstResNext  - lineSecondResNext ) / lineSecond;
                }

                if (lineSecondResNext < lineThird) {
                    lineThirdRes = 0;
                    lineThirdResNext = lineSecondResNext  ;
                }

                else {
                    lineThirdResNext = lineSecondResNext % lineThird ;
                    lineThirdRes = (lineSecondResNext  - lineThirdResNext  ) / lineThird;
                }

                if (lineThirdResNext < lineFourth) {
                    lineFourthRes = 0;
                    lineFourthResNext = lineThirdResNext  ;
                }

                else {
                    lineFourthResNext = lineThirdResNext % lineFourth;
                    lineFourthRes = (lineThirdResNext - lineFourthResNext ) / lineFourth;
                }

                lineFifthRes = lineFourthResNext / lineFifth;

            }

            CalcLampType(body);

            totalLine = lineFirstRes * lineFirst + lineSecondRes * lineSecond  + lineThirdRes * lineThird  + lineFourthRes * lineFourth + lineFifthRes * lineFifth;






            function calcBPType (totalLine) {

                amperageValue = totalLine * amperage;

                if (amperageValue <= BP150 ) {
                    BPTarget = BP150;
                }

                if  (amperageValue > BP150 && amperageValue <= BP240) {
                    BPTarget = BP240;
                }

                if (amperageValue > BP240 && amperageValue <= BP320) {
                    BPTarget = BP320;
                }
            }



            calcBPType (totalLine);


            function calcResistorType (amperageValue, BPTarget) {

                let resistanceValue = amperageValue / BPTarget * 100;

                let closestLeft;
                let closestRight;
                let current;


                for (let i = 0; i < resistorsArr.length; i++) {
                    current = resistorsArr[i];
                    if (current < resistanceValue && (typeof closestLeft === 'undefined' || closestLeft < current)) {
                        closestLeft = current;
                    } else if (current > resistanceValue && (typeof closestRight === 'undefined' || closestRight > current)) {
                        closestRight = current;
                    }
                }

                /* if ((resistanceValue - closestLeft) < (closestRight - resistanceValue)) {
                     resistorTrue = closestLeft;
                 }

                 else {
                     resistorTrue = closestRight;
                 }*/

                resistorTrue = closestRight;

                //console.log(resistanceValue);
                // console.log(closestLeft, closestRight);


            }
            calcResistorType (amperageValue, BPTarget)

            console.log(`L-line A 3,0: ${lineFirstRes}`);
            console.log(`L-line A 1,5: ${lineSecondRes}`);
            console.log(`L-line A 1: ${lineThirdRes}`);
            console.log(`L-line A 0,5: ${lineFourthRes}`);
            console.log(`L-line A 0,25: ${lineFifthRes}`);
            console.log(`Общая длина линии: ${totalLine}`);
            console.log(`Тип блока питания: ${BPTarget}`);
            console.log(`Искомый резистор: ${resistorTrue}`);

        }

        generalFunction ();


        const newItem = {
            id: this.maxId++,
            number: this.maxNumber++,
            length: 33,
            lineA3: lineFirstRes,
            lineA15: lineSecondRes,
            lineA1: lineThirdRes,
            lineA05: 4,
            lineA025: 0,
            bp320: BPTarget,
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










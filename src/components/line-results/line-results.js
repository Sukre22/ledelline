import React from 'react';
import './line-results.css';



const LineResults = (posts) => {

console.log(posts);

let generalArray = Object.values(posts);
let generalArray2 = generalArray.reduce((prev, curr) => [...prev,...curr], []);
let generalArrayBP = generalArray2.reduce((prev, curr) => [...prev,...curr.bp2], []);
let generalArrayRes = generalArray2.reduce((prev, curr) => [...prev,...curr.res2], []);
let modulesArr = [];

let generalArrayMod = generalArray2.reduce((prev, curr) => [...prev,...curr.modules], []);
const generalArrayModFiltered = generalArrayMod.filter(item => item[1] > 0);

    generalArrayModFiltered.forEach((item) => {
        for (let i = 0; i < item[1]; i++) {
            modulesArr.push(...item);
        }
    });

    let modulesArr2 = modulesArr.filter(function(elem) {
        return typeof(elem) === 'string';
    });

    let resultModulesCount = modulesArr2.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    const resultModulesCountLi = Object.entries(resultModulesCount).map(([key, value]) =>
        <li>{key} - {value} шт.</li>
    );
/*    console.log(generalArray2);
console.log(generalArrayMod);
console.log(generalArrayModFiltered);*/

let resultArrayBP = generalArrayBP.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
const resultListItems = Object.entries(resultArrayBP).map(([key, value]) =>
        <li>{key} - {value} шт.</li>
    );

    let resultArrayRes = generalArrayRes.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    const resultListItems2 = Object.entries(resultArrayRes).map(([key, value]) =>
        <li>{key} кОм - {value} шт.</li>
    )




    return (
        <div className={'line-results_container'}>
            <h1 className={'line-results_container-h1'}>Спецификация по всем заданным линиям:</h1>
            <div className={'line-results_container_wrap'}>
                <div className={'line-results_container_wrap-first'}>
                    <h2 className={'line-results_container_wrap-first'}>Светодиодные модули:</h2>
                    <ul  className={'line-results_container_wrap-first-ul'}>
                        {resultModulesCountLi}
                    </ul>
                </div>
                <div className={'line-results_container_wrap-first'}>
                     <h2 className={'line-results_container_wrap-first'}>Блоки питания:</h2>
                     <ul className={'line-results_container_wrap-first-ul'}>
                         {resultListItems}
                    </ul>

                </div>
                <div className={'line-results_container_wrap-first'}>
                    <h2 className={'line-results_container_wrap-first'}>Резисторы:</h2>
                    <ul  className={'line-results_container_wrap-first-ul'}>
                        {resultListItems2}
                    </ul>

                </div>
            </div>  
          
        </div>
       
    )
}

export default LineResults;
import React from 'react';
import './line-results.css';



const LineResults = (posts) => {

console.log(posts);

let generalArray = Object.values(posts);
let generalArray2 = generalArray.reduce((prev, curr) => [...prev,...curr], []);
let generalArrayBP = generalArray2.reduce((prev, curr) => [...prev,...curr.bp2], []);
let generalArrayRes = generalArray2.reduce((prev, curr) => [...prev,...curr.res2], []);

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
                      <li>L-line A 3 - 3 шт.</li>
                      <li>L-line A 1,5 - 3 шт.</li>
                      <li>L-line A 1 - 3 шт.</li>
                      <li>L-line A 0,5 - 3 шт.</li>
                      <li>L-line A 0,25 - 3 шт.</li>
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
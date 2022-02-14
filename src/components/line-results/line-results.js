import React from 'react';
import './line-results.css';



const LineResults = () => {

   

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
                       <li>БП320 - 3 шт.</li>
                       <li>БП240 - 1 шт.</li>
                       <li>БП150 - 2 шт.</li>
                    </ul>

                </div>
                <div className={'line-results_container_wrap-first'}>
                    <h2 className={'line-results_container_wrap-first'}>Резисторы:</h2>
                    <ul  className={'line-results_container_wrap-first-ul'}>
                      <li>37 кОм - 1 шт.</li>
                      <li>27 кОм - 1 шт.</li>
                    </ul>

                </div>
            </div>  
          
        </div>
       
    )
}

export default LineResults;
import './table.scss';
import './table-media.scss'

import { useState, useEffect } from 'react';



const Table = ({toggleTheme}) => {

    const [data, setData] = useState(null);


    const requestURL = 'http://localhost/api/test';

    const responseTime = 5000;


    function sendRequest(url){
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>setData(data.sort((a,b)=>{
                return a.id - b.id;
            })))
    }



    // XMLHttpRequest

    // function sendRequest(method, url) {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();


    //         xhr.open(method, url);

    //         xhr.responseType = 'json';

    //         xhr.onload = () => {
    //             if (xhr.status >= 400) {
    //                 reject(xhr.response);
    //             } else {
    //                 resolve(xhr.response);
    //             }
    //         }

    //         xhr.onerror = () => {
    //             reject(xhr.response);
    //         }

    //         xhr.send();
    //     })
    // }


    useEffect(() => {

        sendRequest(requestURL)
        setInterval(()=>{
            sendRequest(requestURL);
        },responseTime)




        // XMLHttpRequest

        // sendRequest('GET', requestURL)
        //     .then(data => setData(data.sort((a, b) => {
        //         return a.id - b.id;
        //     })))
        //     .catch(err => console.log('error'));
        // setInterval(() => {
        //     sendRequest('GET', requestURL)
        //         .then(data => setData(data.sort((a, b) => {
        //             return a.id - b.id;
        //         })));
        // }, responseTime)
    }, [])





    return (
        <>

            <button onClick={toggleTheme} className="theme">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M281.2 248.9C295.6 228.3 304 203.2 304 176c0-70.7-57.3-128-128-128S48 105.3 48 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H93c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C11.6 247.9 0 213.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H210.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM176 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H256v16c0 44.2-35.8 80-80 80z"/></svg>
            </button>

            <div className="header">
                <div className="header__wrapper">
                    <div className="header__icon">Home</div>
                    <div className="header__logo">SoftWare</div>
                </div>
                <div className="header__title">Measurement report</div>
            </div>

            <div className='wrapper'>
                <div className="table">
                    <div className="table__header">
                        <div className="table__header-block">№</div>
                        <div className="table__header-block">Date/Time</div>
                        <div className="table__header-block">Description</div>
                        <div className="table__header-block">Measurement Value</div>
                    </div>
                    <div className="table__body">


                        {data != null ? data.map((item, i) => {
                            return (
                                <>
                                    <div className="table__body-line">
                                        <div className="table__body-block">{item.id}</div>
                                        <div className="table__body-block">{item.date}</div>
                                        <div className="table__body-block">{item.description}</div>
                                        <div className="table__body-block">{item.measurementValue} kg</div>
                                    </div>
                                </>
                            )
                        }) :
                            <>
                                <div className="table__body-line">
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                </div>

                                <div className="table__body-line">
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                </div>

                                <div className="table__body-line">
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                </div>

                                <div className="table__body-line">
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                    <div className="table__body-block"></div>
                                </div>
                            </>
                        }
                    </div>
                </div>

                <div className="btns">
                    <button>Download pdf</button>
                    <button>Download XLS</button>
                    <button>Send report e-mail</button>
                </div>

                <div className="info">
                    <div className="info__title">System information</div>
                    <div className="info__capacity">Database capacity: 100 MB / 1 GB</div>
                    <div className="info__date">On since: 11.09.2022, 07:30:01</div>
                    <div className="info__logged">Users logged in: 2</div>
                </div>
            </div>
        </>
    )
}

export default Table;
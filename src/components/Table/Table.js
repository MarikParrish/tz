import './table.scss';
import './table-media.scss'

import { useState, useEffect } from 'react';



const Table = () => {

    const [data, setData] = useState(null);
    const requestURL = 'http://localhost:3001/data';


    const responseTime = 5000;

    function sendRequest(method, url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();


            xhr.open(method, url);

            xhr.responseType = 'json';

            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            }

            xhr.onerror = () => {
                reject(xhr.response);
            }

            xhr.send();
        })
    }


    useEffect(() => {
        sendRequest('GET', requestURL)
            .then(data => setData(data))
            .catch(err => console.log('error'));
        setInterval(() => {
            sendRequest('GET', requestURL)
                .then(data => setData(data));
        }, responseTime)
    }, [])


    const fillEmpty = () => {
        return (
            <>
                <div className="table__body-line">
                    <div className="table__body-block"></div>
                    <div className="table__body-block"></div>
                    <div className="table__body-block"></div>
                    <div className="table__body-block"></div>
                </div>
            </>
        )
    }


    return (
        <>

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
                        }) : null}

                        {data != null ? (data.length < 8 ? fillEmpty() : null) : null}
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
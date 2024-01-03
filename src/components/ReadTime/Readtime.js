import React from 'react';
import './Readtime.css';
const Readtime = (props) => {
    let totalTime = 0
    for(const time of props.readTime)
    {
        totalTime = totalTime + time;
    }

    return (
        <div className='read-time-spent'>
            <h1>Spent time on read: {totalTime} min</h1>
        </div>
    );
};

export default Readtime;
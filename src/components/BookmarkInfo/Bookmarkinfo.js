import React from 'react';
import './Bookmarkinfo.css'
const Bookmarkinfo = (props) => {
    return (
        <div className='bookmark-info'>
           <h1>{props.bookmark}</h1> 
        </div>
    );
};

export default Bookmarkinfo;
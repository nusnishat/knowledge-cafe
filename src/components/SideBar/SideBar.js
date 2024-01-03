import React from 'react';
import './SideBar.css'
import Bookmarks from '../Bookmarks/Bookmarks';
import Readtime from '../ReadTime/Readtime';
const SideBar = (props) => {
    return (
        <div className='slidebar'>
            <Readtime readTime ={props.readTime}></Readtime>
            <Bookmarks bookmark ={props.bookmark}></Bookmarks>
        </div>
    );
};

export default SideBar;
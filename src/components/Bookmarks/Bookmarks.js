import React from 'react';
import './Bokkmarks.css'
import Bookmarkinfo from '../BookmarkInfo/Bookmarkinfo';
const Bookmarks = (props) => {
    const bookmarks = props.bookmark;
    console.log(props.bookmark);
    return (
        <div className='bookmarks'>
           <h1>Bookmarked Blogs : {bookmarks.length}</h1>
           <div>
                {
                    bookmarks.map(bookmark => <Bookmarkinfo bookmark={bookmark}></Bookmarkinfo>)
                }
           </div>
        </div>
    );
};

export default Bookmarks;
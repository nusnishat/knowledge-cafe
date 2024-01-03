import React, { useEffect, useState } from 'react';
import './Blogs.css';
import SideBar from '../SideBar/SideBar';
import Blog from '../Blog/Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('fakeDb.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    const [readTime, setReadTime] = useState([]);

    const handleReadTime = rdTime =>{
        const newReadTime = [...readTime, rdTime];
        setReadTime(newReadTime);
    }
    const [bookmark, setBookmark] = useState([]);
    const handleAddBookmark = bmark =>{
        let newBookmark = [];
        const existingBookmark = bookmark.find(bm => bm===bmark)
        if(!existingBookmark){
            newBookmark = [...bookmark, bmark];
             setBookmark(newBookmark);
        }
    }
    
    return (
        <div className='blogs-container'>
           <div className="blog-container">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleReadTime={handleReadTime}></Blog>)
                }
           </div>
           <div className="sidebar-container">
                <SideBar readTime={readTime} bookmark={bookmark}></SideBar>
           </div>
        </div>
    );
};

export default Blogs;
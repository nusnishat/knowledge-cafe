import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookOpen} from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const {picture, published_date, author_name,title, read_time} = props.blog;
    return (
        <div className='blog'>
            <img src={picture} alt="" />
            <div className="blog-info">
                <div className="author-name">
                    <p>{author_name}</p>
                    <p className='published-date'>{published_date}</p>
                </div>
                <div className='read-time'>
                    <p>{read_time} min read <FontAwesomeIcon onClick={()=>props.handleAddBookmark(title)} icon={faBookOpen}/></p>
                </div>
                
            </div>
            <h1>{title}</h1>
            <p className='mark-as-read' onClick={()=>props.handleReadTime(read_time)}>Mark as read</p>
            <hr />
        </div>
    );
};

export default Blog;
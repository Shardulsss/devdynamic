import React from 'react';
import { useState, useEffect } from 'react';
import Blog from './blog';

const Blogs = () => {
    const [posts , setPosts] = useState([{"title":"first"},{"title":"sec"},{"title":"third"}])



    return (<div>
        <h1>Blogs</h1>
        {posts.map(p=><Blog post={p}></Blog>)}
        
        </div>)
}

export default Blogs;
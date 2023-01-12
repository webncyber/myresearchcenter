import './style.scss'
import React, { useState , useEffect } from 'react';

const BlogListing = () =>{
    const [blogs, setData] = useState([]);
  useEffect(() => {
        const url = "/data/blogs/blog-listing.json";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const blogData = await response.json();
            setData(blogData);
           
          } catch (error) {
            //console.log("error", error);
          }
        };
    
        fetchData();
    }, []); 
      
    return(
        <div>
          {
             <ul>
              {blogs.map(blog =>
              <li key={blog}>{blog.title}</li>
             )}
           </ul>}
        </div>
    )
}

export default BlogListing;
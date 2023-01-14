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
        <div className='blogs-listing'>
          {
             <ul>
              {blogs.map(blog =>
              <li key={blog}>
                <div className='row'>
                  <div className='fit'>
                  <a href={'/blogs/music/'+ blog.id}> <img src={blog.heroimageurl}/></a>
                  </div>
                  <div>
                    <div><a href={'/blogs/music/'+ blog.id}><h4>{blog.title}</h4></a></div>
                    <div className='blurb'>{blog.blurb}</div>
                  </div>
                </div>
              </li>
             )}
           </ul>}
        </div>
    )
}

export default BlogListing;
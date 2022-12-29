import '../../../Styles/Layout.scss'
import Hero from '../../../components/hero'
import NavBar from '../../../components/navbar';
import SingleColumnContent from '../../../components/singleColumnContent';
import React, { useState , useEffect } from 'react';
import SEO from '../../../components/seo';

const BlogDetails = (props) => {
  const [blog, setData] = useState([]);
  let blogId = props.blogId;

  useEffect(() => {
    const url = "/data/blogs/"+blogId+".json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const blogData = await response.json();
        setData(blogData);
        document.title = blogData.metadata.browsertitle;
       
      } catch (error) {
        //console.log("error", error);
      }
    };

    fetchData();
}, []);
  

  return (
   
   <div className='container'>
    <SEO title="" description="ideas and blogs" keywords="key1, key2" url={"/blogs/" + blogId}/>
    
      <div className='heading-section'>
        <NavBar/>
        <Hero url={blog.heroImageURL} headingOne={blog.title}  />
      </div>
      <div className='content-section'>
          <SingleColumnContent heading={blog.title} content={blog.content}/>
      </div>
   </div>
  );
}


export default BlogDetails;

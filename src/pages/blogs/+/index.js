import '../../../Styles/Layout.scss'
import Hero from '../../../components/hero'
import TopNav from '../../../components/navbar/topnav';
import FooterNav from '../../../components/navbar/footernav';
import SingleColumnContent from '../../../components/singleColumnContent';
import React, { useState , useEffect } from 'react';
import SEO from '../../../components/seo';

const BlogDetails = (props) => {
  const [blog, setData] = useState([]);
  let blogId = props.blogId;

  useEffect(() => {
    const url = "/data/blogs/music/"+blogId+".json";

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
        <TopNav/>
        <Hero url={blog.heroimageurl} headingOne={blog.title}  />
      </div>
      <div className='content-section'>
          <SingleColumnContent heading={blog.subtitle} content={blog.content}/>
          <div className='footer-section'>
            <FooterNav/>
          </div>
      </div>

   
     
   </div>
  );
}

export default BlogDetails;

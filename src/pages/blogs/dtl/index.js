import '../../../Styles/Layout.scss'
import Hero from '../../../components/hero'
import NavBar from '../../../components/navbar';
import homeImagePath from '../../../Images/bkgHome.jpg'
import { Helmet } from 'react-helmet';
import SingleColumnContent from '../../../components/singleColumnContent';
import React, { useState , useEffect } from 'react';

const BlogDetails = (props) => {
  const [blog,setData] = useState([]);
  let blogId = props.blogId;

  useEffect(() => {
    const url = "/data/blogs/"+blogId+".json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const blog = await response.json();
        setData(blog);
      } catch (error) {
        //console.log("error", error);
      }
    };

    fetchData();
}, []);
  
  return (
   <div className='container'>
    <Helmet>
        <meta charSet='utf-8'/>
        <title>My Research Center</title>
        <link rel="canonical" href="" />
      </Helmet>

      <div className='heading-section'>
        <NavBar/>
        <Hero url={homeImagePath} headingOne={blog.title}  />
      </div>
      <div className='content-section'>
          <SingleColumnContent heading={blog.title} content={blog.content}/>
      </div>
   </div>
  );
}


export default BlogDetails;

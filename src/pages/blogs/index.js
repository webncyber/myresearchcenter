import '../../Styles/Layout.scss'
import Hero from '../../components/hero'
import NavBar from '../../components/navbar';
import SEO from '../../components/seo';
import SingleColumnContent from '../../components/singleColumnContent'
import BlogListing from '../../components/blogListing';

function Blogs() {
  return (
    
   <div className='container'>
     <SEO title="My Research Center - Blogs" description="ideas and blogs" keywords="key1, key2" url="/blogs"/>
   
      <div className='heading-section'>
        <NavBar/>
        <Hero url="/Images/blogs-landing.jpg" headingOne="Blogs Center"  />
      </div>
      <div className='content-section'>
          <SingleColumnContent heading="My research blogs" content={GetContent()}/>
      </div>

      {/* <Hero url={homeImagePath} headingOne="Ideas.........." headingTow="are where your research begins!" />
      <NavBar/>

      <SingleColumnContent/> */}
    
   </div>
  );
}

function GetContent()
{
  return (
      <div>
        <BlogListing />
      </div>
  );
}
export default Blogs;

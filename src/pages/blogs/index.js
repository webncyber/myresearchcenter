import '../../Styles/Layout.scss'
import Hero from '../../components/hero'
import TopNav from '../../components/navbar/topnav';
import SEO from '../../components/seo';
import SingleColumnContent from '../../components/singleColumnContent'
import BlogListing from '../../components/blogListing';
import FooterNav from '../../components/navbar/footernav';

function Blogs() {
  return (
    
   <div className='container'>
     <SEO title="My Research Center - Blogs" robots="index, follow"  description="Research Center blogs listing" keywords="blogs, research Center blogs, How to blogs, How to" url="/blogs"/>
   
      <div className='heading-section'>
        <TopNav/>
        <Hero url="/Images/blogs-landing.jpg" headingOne="Blogs Center"  />
      </div>
      <div className='content-section'>
          <SingleColumnContent heading="Blogs" content={GetContent()}/>

          <div className='footer-section'>
            <FooterNav/>
          </div>
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

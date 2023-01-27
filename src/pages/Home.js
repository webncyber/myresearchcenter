import '../Styles/Layout.scss'
import Hero from '../components/hero'
import TopNav from '../components/navbar/topnav';
import SEO from '../components/seo';
import BlogListing from '../components/blogListing';
import SingleColumnContent from '../components/singleColumnContent'
import FooterNav from '../components/navbar/footernav';

function App() {

  let heroImagePath = "/Images/bkgHome.jpg";
  
  return (

    <div className='container'>

      <SEO title="My Research Center" robots="index, follow"  imageUrl={"https://www.myresearchcenter.com" + heroImagePath} description="Research Center is where you can find your ideal blog posts for the products you are searching for, and comparing them each other. " keywords="research center, Search, research, products compare, compare" url="" />
      <div className='heading-section'>
        <TopNav />
        <Hero url={heroImagePath} headingOne="Ideas........." headingTwo="are where your research begins!" />
      </div>
      <div className='content-section'>
        <SingleColumnContent heading="Welcome to research center" content={GetContent()} />

        <div className='footer-section'>
            <FooterNav/>
          </div>
      </div>

    </div>
  );
}

function GetContent() {
  return (
    <div>
      <div className='content'>
        <div>

          <div>
            A place where you can find many topics on certain products, compare products, and more!
          </div>
        </div>
        <div>
          <h3>Recent Blogs</h3>
          <div>
            <BlogListing />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

import '../Styles/Layout.scss'
import Hero from '../components/hero'
import TopNav from '../components/navbar/topnav';
import SEO from '../components/seo';
import BlogListing from '../components/blogListing';
import SingleColumnContent from '../components/singleColumnContent'


function App() {

  return (

    <div className='container'>

      <SEO title="My Research Center" description="Welcome to research center" keywords="key1, key2, key3" url="" />
      <div className='heading-section'>
        <TopNav />
        <Hero url="/Images/bkgHome.jpg" headingOne="Ideas........." headingTwo="are where your research begins!" />
      </div>
      <div className='content-section'>
        <SingleColumnContent heading="Welcome to research center" content={GetContent()} />
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

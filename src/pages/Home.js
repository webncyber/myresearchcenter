import '../Styles/Layout.scss'
import Hero from '../components/hero'
import NavBar from '../components/navbar';
import SEO from '../components/seo';
import BlogListing from '../components/blogListing';
import SingleColumnContent from '../components/singleColumnContent'


function App() {
  
  return (
    
   <div className='container'>

      <SEO title="My Research Center" description="Welcome to research center" keywords="key1, key2, key3" url=""/>
      <div className='heading-section'>
        <NavBar/>
        <Hero url="/Images/bkgHome.jpg" headingOne="Ideas........."  headingTwo="are where your research begins!" />
      </div>
      <div className='content-section'>
        <SingleColumnContent heading="Welcome to research center" content={GetContent()}/>
      </div>

   </div>
  );
}

function GetContent()
{
  return (
  <div>
    <div>
      <h3>Recent Blogs</h3>
      <div>
        <BlogListing />
      </div>
    </div>
    
    <div className='row'>
      <div>What is My Research Center?</div>
      <div>Why to use it?</div>
  </div>
  </div>
  );
}
export default App;

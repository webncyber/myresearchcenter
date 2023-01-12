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
    <div className='content'>
        <div className='row'>
          <div className='img-box fit'><img width={100} src='/Images/researchImage.jpg'></img></div>
          <div>
          Have you ever spent time on doing some research about something? Or to make some important decision to buy something? 
          Or to find out which process is better for some specific need? Then, <strong>Research Center</strong> is the place for you. It is the place where you can find out many topics about certain products, and put your thoughts together!
          </div>
        </div>
    </div>
    <div>
      <h3>Recent Blogs</h3>
      <div>
        <BlogListing />
      </div>
    </div>
    
    <div className='row cal'>
      <div>What is My Research Center?</div>
      <div>Why to use it?</div>
  </div>
  </div>
  );
}
export default App;

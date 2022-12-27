import '../Styles/Layout.scss'
import Hero from '../components/Hero/'
import NavBar from '../components/navbar';
import homeImagePath from '../Images/bkgHome.jpg'
import { Helmet } from 'react-helmet';
import SingleColumnContent from '../components/singleColumnContent'


function App() {
  return (
    
   <div className='container'>
    <Helmet>
        <meta charSet='utf-8'/>
        <title>My Research Center</title>
        <link rel="canonical" href="" />
      </Helmet>

      <div className='heading-section'>
        <NavBar/>
        <Hero url={homeImagePath} headingOne="Ideas.........." headingTow="are where your research begins!" />
      </div>
      <div className='content-section'>
          <SingleColumnContent/>
      </div>

      {/* <Hero url={homeImagePath} headingOne="Ideas.........." headingTow="are where your research begins!" />
      <NavBar/>

      <SingleColumnContent/> */}
    
   </div>
  );
}

export default App;

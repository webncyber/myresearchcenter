import '../Styles/Layout.scss'
import Hero from '../components/hero'
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
        <Hero url={homeImagePath} headingOne="Ideas........."  headingTwo="are where your research begins!" />
      </div>
      <div className='content-section'>
          <SingleColumnContent heading="Welcome!" content={GetContent()}/>
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
    <span>
        <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </span>
  );
}
export default App;

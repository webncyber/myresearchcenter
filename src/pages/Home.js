import '../Styles/Layout.scss'
import Hero from '../components/Hero/'
import NavBar from '../components/navbar';
import homeImagePath from '../Images/bkgHome.jpg'
import { Helmet } from 'react-helmet';


function App() {
  return (
    
   <div >
    <Helmet>
        <meta charSet='utf-8'/>
        <title>My Research Center</title>
        <link rel="canonical" href="" />
      </Helmet>
      <Hero url={homeImagePath} headingOne="Ideas.........." headingTow="are where your research begins!" />
      <NavBar/>
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
   </div>
  );
}

export default App;

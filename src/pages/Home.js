import '../Styles/Layout.scss'
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function App() {
  return (
   <div className='container'>
      <div className='row'>
        <div className='col'>Col1 </div>
        <div className='col'>Col 2 </div>
      </div>
   </div>
  );
}

export default App;

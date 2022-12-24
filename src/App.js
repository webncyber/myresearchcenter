import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Home />
  );
}

export default App;

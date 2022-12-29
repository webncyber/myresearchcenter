import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Blogs from './pages/blogs/index'
import BlogDetails from './pages/blogs/dtl/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route } from "react-router-dom";


library.add(fab, faCheckSquare, faCoffee);

function App() 
{
 
  const lastDir = window.location.toString().substring(window.location.toString().lastIndexOf('/') + 1)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/blogs">
        <Route index element={<Blogs />} />
      </Route>
      <Route path="/blogs/:path">
        <Route index element={<BlogDetails blogId={lastDir} />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

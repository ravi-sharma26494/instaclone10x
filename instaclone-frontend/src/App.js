import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import PostviewPage from './PostviewPage/PostviewPage';
// import Navbar from './Navbar';
import ImageUpload from './PostviewPage/ImageUpload';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<LandingPage/>}></Route>
    <Route path='/postview' element = {<PostviewPage/>}></Route>
    <Route path='/uploadimage' element = {<ImageUpload/>}></Route>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

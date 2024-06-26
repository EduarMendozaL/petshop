import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Categoria from './pages/Categoria';
import Home from "./pages/Home";
import Page404 from './pages/Page404';
import Post from './pages/Post';
import Sobre from "./pages/Sobre";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

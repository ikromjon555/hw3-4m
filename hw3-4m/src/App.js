import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import './App.css'
function App() {
  return (
    <Router>
      <header className='header'>
        <Link to={'/'}>Home page</Link>
        <Link to={'/category'}>Category page</Link>
        <Link to={'/cart'}>Cart page</Link>
      </header>
    
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail' element={<Detail />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/cart' element={<Cart />}/> 
      </Routes>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router,

  Route,
  Routes

} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import "./assets/css/app.css"
import Details from './pages/Details';
import Login from './parts/HomePage/Login';
import Cart from './pages/Cart'
import Congratulation from './pages/Congratulation'
import NotFound from './pages/NotFound'




function App() {
  return (
    <Router>
    <div className="App">

        <Routes>

          <Route exact path='/' element={<HomePage />} />
          <Route path='/categories/:idc' element={<Details />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/congratulation' element={<Congratulation />} />
          <Route path="*" element={<NotFound/>}/>

     </Routes>

     </div>
     </Router>
    
  );
}

export default App;

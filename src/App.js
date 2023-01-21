import {BrowserRouter as Router,

  Route,
  Routes

} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import "./assets/css/app.css"
import Details from './pages/Details';
import Cart from './pages/Cart'
import Congratulation from './pages/Congratulation'
import NotFound from './pages/NotFound'
import  Provider  from './helpers/hooks/useGlobalContext';
import Vertebrata from './parts/Vertebrata';
import Fosil from "./parts/Fosil"
import Artefak from "./parts/Artefak"
import Batuan from "./parts/Batuan"
import UserList from './crud/UserList';
import AddUser from './crud/AddUser';
import EditUser from './crud/EditUser';



function App() {
  return (
    <Provider>
    <Router>


        <Routes>

          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/categories/:idc' element={<Details />} />
          <Route path='/categories/:idc/products/:idp' element={<Details />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/congratulation' element={<Congratulation />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path='/vertebrata' element={<Vertebrata />} />
          <Route path='/fosil' element={<Fosil />} />
          <Route path='/artefak' element={<Artefak/>} />
          <Route path='/batuan' element={<Batuan/>} />
          <Route path='/userlist' element={<UserList/>} />
          <Route path='/add' element={<AddUser/>} />
          <Route path='/edit/:id' element={<EditUser/>} />


     </Routes>

 
     </Router>
     </Provider>
  );
}

export default App;
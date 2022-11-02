import {BrowserRouter as Router,

  Route,
  Routes
} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import "./assets/css/app.css"
import Details from './pages/Details';


function App() {
  return (
    <Router>
    <div className="App">

     <Routes>
          <Route exact path='/' element={<HomePage />} />
           <Route path='/categories/:idc' element={<Details/>}/>
     </Routes>

     </div>
     </Router>
    
  );
}

export default App;

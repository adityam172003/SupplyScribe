import Menus from './Components/Menus';
import Cart from './Components/Cart';
import Abhimenu from './Components/AbhiMenu';
import UserCart from './Components/UserCart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router> 
      <Routes>
        <Route path='/cart' element={<Cart/>}>
        </Route>
        <Route path='/abhimenu' element={<Abhimenu/>}>
        </Route>
        <Route path='/usercart' element={<UserCart/>}>
        </Route>
      </Routes>

      {/* <Menus/> */}
     </Router>
      
    </div>
  );
}

export default App;
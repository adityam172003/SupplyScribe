import Menus from './Components/Menus';
import Cart from './Components/Cart';
import MenuAbhi from './Components/MenuAbhi';
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
        <Route path='/abhimenu' element={<MenuAbhi/>}>
        </Route>
      </Routes>

      {/* <Menus/> */}
     </Router>
      
    </div>
  );
}

export default App;
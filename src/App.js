import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './FirstPage/Login';
// import HomePage from './FirstPage/HomePage';
// import Registration from './FirstPage/Registration';
// import ForgotPassword from './FirstPage/ForgotPassword';
// import Vhi_registration from './Components/vhi_registration/Vhi_registration';
// import VhiNavBar from './Components/vhi_navbar/VhiNavBar';
// import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <div className='App'>
        {/* <VhiNavBar /> */}
        <div>
          <Switch>
            <Route exact path='/'>
              <Login/>
              {/* <About/> */}
              {/* <Contact/> */}
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

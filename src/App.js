import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Login from './FirstPage/Login';
// import HomePage from './FirstPage/Hzzz
import VhiNavBar from './Components/vhi_navbar/VhiNavBar';
import VhiOldCom from './Components/vhi-oldcomm/VhiOldCom';
import Vhi_NewReg from './Components/vhi_newregistration/Vhi_NewReg';
import ControlNavBar from './Components/vhi_navbar/controllNavbar/ControlNavBar';
import VhiHome from './Components/home/VhiHome';
import VhiLogin from './Components/vhi_login/VhiLogin';
import Vhi_registration from './Components/vhi_registration/Vhi_registration';


function App() {
  return (
    <Router>
      <div className='App'>
        <ControlNavBar>
          <VhiNavBar />
        </ControlNavBar>
        <div>
          <Switch>
            <Route exact path='/'>
              <VhiHome />
            </Route>
            <Route path='/VhiLogin'>
              <VhiLogin />
            </Route>
            <Route exact path='/VhiRegistration'>
              <Vhi_registration />
            </Route>
            <Route path='/OldCommercial'>
              <VhiOldCom />
            </Route>
            <Route path='/VhiNewRegistration'>
              <Vhi_NewReg />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

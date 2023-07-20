import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './FirstPage/Login';
import HomePage from './FirstPage/HomePage';
import Registration from './FirstPage/Registration';
import ForgotPassword from './FirstPage/ForgotPassword';
import Vhi_registration from './Components/vhi_registration/Vhi_registration';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          {/* <Vhi_registration /> */}
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

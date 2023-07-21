import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Vhi_registration from './Components/vhi_registration/Vhi_registration';
import VhiNavBar from './Components/vhi_navbar/VhiNavBar';


function App() {
  return (
    <Router>
      <div className='App'>
        <VhiNavBar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Vhi_registration />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Vhi_registration from './Components/vhi_registration/Vhi_registration';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Vhi_registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

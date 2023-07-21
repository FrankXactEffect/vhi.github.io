import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
// import Login from './FirstPage/Login';
// import HomePage from './FirstPage/HomePage';
// import Registration from './FirstPage/Registration';
// import ForgotPassword from './FirstPage/ForgotPassword';
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

// Tempoary routing for login and registration page
// <div>
// <BrowserRouter>
//   <Routes>
//     <Route index exact path='/' element={<HomePage/>}/>
//     <Route path='/Login' element={<Login/>}/>
//     <Route path='/Registration' element={<Registration/>}/>
//     <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
// </Routes>
// </BrowserRouter>
// </div>
  );
}

export default App;

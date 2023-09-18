import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Login from './FirstPage/Login';
import HomePage from './FirstPage/HomePage';
import Registration from './FirstPage/Registration';
// import ControlNavBar from './Components/vhi_navbar/controllNavbar/ControlNavBar';
// import ForgotPassword from './FirstPage/ForgotPassword';
import Vhi_registration from './Components/vhi_registration/Vhi_registration';
// import VhiNavBar from './Components/vhi_navbar/VhiNavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Vhi_NewReg from './Components/vhi_newregistration/Vhi_NewReg';
import Faq from './Pages/Faq';
import { UserPage } from './OnLogin/UserPage';
import ForgotPassword from './FirstPage/ForgotPassword';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VhiOldCom from './Components/vhi-oldcomm/VhiOldCom';
import UserFaq from './OnLogin/UserFaq';
import UserContact from './OnLogin/UserContact';
import UserAbout from './OnLogin/UserAbout';
import VhiOldPri from './Components/vhi-oldcomm/VhiOldPri';
import Verified from './Verified/Verified';
import ResetSucess from './FirstPage/ResetSucess';
import ResgistrationVer from './Verified/ResgistrationVer';




function App() {
  return (
    <div className='App'>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
           <Route path ='/' element={<HomePage/>}></Route>
           <Route path ='/Registration' element={<Registration/>}></Route>
           <Route path ='/Login' element={<Login/>}></Route>
           <Route path ='/Contact' element={<Contact/>}></Route>
           <Route path ='/About' element={<About/>}></Route>
           <Route path ='/Faq' element={<Faq/>}></Route>
           <Route path ='/ForgotPassword' element={<ForgotPassword/>}></Route>
           <Route path ='/Vhi_registration' element={<Vhi_registration/>}></Route>
           <Route path ='/UserPage' element={<UserPage/>}></Route>
           <Route path ='/Vhi_NewReg' element={<Vhi_NewReg/>}></Route>
           <Route path ='/UserFaq' element={<UserFaq/>}></Route>
           <Route path ='/UserContact' element={<UserContact/>}></Route>
           <Route path ='/UserAbout' element={<UserAbout/>}></Route>
           <Route path ='/VhiOldCom' element={<VhiOldCom/>}></Route>
           <Route path ='/VhiOldPri' element={<VhiOldPri/>}></Route>
           <Route path ='/Vhi_registration' element={<VhiOldPri/>}></Route>
           <Route path ='/Verified' element={<Verified/>}></Route>
           <Route path ='/ResetSucess' element={<ResetSucess/>}></Route>
           <Route path ='/RegistrationVer' element={<ResgistrationVer/>}></Route>


           
        </Routes>

      </BrowserRouter>
    </div>
   
  );
}  

export default App;

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Body from './Components/Body';
import Login  from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import ContactUs from './Components/ContactUs';


function App() {

  const [loginFlag, setloginFlag] = useState(false);
  const [signupFlag, setsignupFlag] = useState(false);
  const [userlog, setuserlog] = useState(false);
  
  useEffect(() => {
    // Check if userlog is false and destroy the user session
    if (!userlog) {
      // Perform any logic to destroy the user session, e.g., remove items from local storage
      localStorage.removeItem('sessionData');
    }
  }, [userlog]);


  if(!loginFlag){
    return (
      <div className='header-footer'>
        <Router>
          <Header setsignupFlag={setsignupFlag} setloginFlag={setloginFlag} userlog={userlog} setuserlog={setuserlog}/>
          <Switch>
            
            <Route exact path='/charity_foundation'>
              <Body userlog={userlog} setuserlog={setuserlog}/>
            </Route>
            <Route exact path='/contact'>
              <ContactUs userlog={userlog} setuserlog={setuserlog}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }

  
  if(!signupFlag){
    return(
      <Login setloginFlag={setloginFlag} setsignupFlag={setsignupFlag} setuserlog={setuserlog}/>
    );
  }
  return(
    <Signup setloginFlag={setloginFlag} setsignupFlag={setsignupFlag} setuserlog={setuserlog}/>
  );
  
}

export default App;

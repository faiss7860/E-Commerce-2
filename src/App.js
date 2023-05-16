import React , {useState , useEffect } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Loading from './Components/Home/Loading'
import Footer from './Components/Footer/Footer';
import ContactUsPage from './Pages/ContactUsPage';
import SignUpPage from './Pages/SignUpPage';
import { LOCAL_STORAGE_LOGGED_USRS_KEY } from "./Utils/UsersList";
import LogIn from './Components/LogIn-SignUp/LogIn';
import AddToCart from './Components/AddToCart/AddToCart';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(()=>{
    setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);

        const loggedInUser = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_LOGGED_USRS_KEY)
        );
        if (loggedInUser) {
          setUser(loggedInUser);
          setLoggedIn(true);
        }
    },[])

  
    useEffect(() => {
      if (Object.keys(user).length > 0) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, [user]);

  return (
    <div className="App"> 
    {isLoading ? 
        <Loading/> :
        <div className='mainpage'>
          <BrowserRouter>
            <Navbar setUser={setUser} isLoggedIn={isLoggedIn} user={user}/>
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path='/AddToCart' element={<AddToCart user={user}/>}/>
                <Route exact path='/Contact_Us' element={<ContactUsPage/>}/>                
                <Route exact path='/SignUp' element={<SignUpPage/>}/>
                <Route exact path='/LogIn' element={<LogIn setUser={setUser} setLoggedIn={setLoggedIn}/>}/>
              </Routes>
            <Footer/>
          </BrowserRouter>
        </div>
    }
    </div>
  );
}

export default App;

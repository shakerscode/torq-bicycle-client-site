import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import HomePage from './Pages/HomePage/HomePage';
import Purchase from './Pages/Purchese/Purchase';
import Footer from './Pages/SharedPages/Footer';
import Navbar from './Pages/SharedPages/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReviews from './Pages/Dashboard/AddReviews';
import Reviews from './Pages/Reviews/Reviews';
import MyProfile from './Pages/Dashboard/MyProfile';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/purchase/:id'element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/my-profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}/>
          <Route path='/dashboard/add-reviews' element={<AddReviews></AddReviews>}/>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;

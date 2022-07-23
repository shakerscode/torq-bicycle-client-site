import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import {Login, SignUp, HomePage, Purchase, Footer, Navbar, About, Contact, Blog, RequireAuth, Dashboard, NotFound, MyOrders, AddReviews, Reviews, MyProfile, Users, ManageOrders, AddProduct, ManageProducts, RequireAdmin, RequireUser, Payment } from './Pages/Import' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

AOS.init();

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route> 

        <Route path='/my-profile' element={<RequireAuth>
          <MyProfile></MyProfile>
        </RequireAuth>}></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          <Route index element={<MyProfile></MyProfile>} />
          <Route path='/dashboard/my-orders' element={<RequireUser><MyOrders></MyOrders></RequireUser>} />
          <Route path='/dashboard/payment/:id' element={<RequireUser><Payment></Payment></RequireUser>} />
          <Route path='/dashboard/add-reviews' element={<RequireUser><AddReviews></AddReviews></RequireUser>} />
          <Route path='/dashboard/users' element={<RequireAdmin><Users></Users></RequireAdmin>} />
          <Route path='/dashboard/manage-all-orders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} />
          <Route path='/dashboard/add-product' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} />
          <Route path='/dashboard/manage-product' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>} />

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;

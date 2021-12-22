import React from 'react';
import './css/index.css';
import Home from './routs/Home'; 
import Cart from './routs/Cart';
import Signin from './routs/Signin';
import Buy from './routs/Buy'; 
import Product from './routs/Product'; 
import  {BrowserRouter, BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Errors from './components/Errors';
import SideBar from './components/SideBar';
import SidebarItems from './routs/SidebarItems'
import Createaccount from './routs/Createaccount';
import {useGlobalContext} from './components/context';
function App() {
  const {sidebar}=useGlobalContext();
  return ( <BrowserRouter>
<SideBar />
<Navbar />
<Routes>
  <Route exact path='/' element={<Home/>} />
   <Route path='/Product' element={<Product/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/signin' element={<Signin/>} />
    <Route path='/Buy' element={<Buy/>} />
    <Route path='/Signin/Createaccount' element={<Createaccount/>} />
 <Route path='/SidebarItems' element={<SidebarItems/>}/>
  <Route path='*' element={ <Errors/>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;

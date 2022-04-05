

import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotAvailable from './components/NotAvailable/NotAvailable';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/home' element={<Header></Header>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotAvailable></NotAvailable>}></Route>
      </Routes>
    </div>
  );
}

export default App;

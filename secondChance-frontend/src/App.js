import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SearchPage from './components/SearchPage/SearchPage';
import LoginPage from './components/LoginPage/LoginPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ItemPage from './components/ItemPage/ItemPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { AppProvider } from './context/AppContext';

function App() {

  return (
      <AppProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path='/app/profile' element={<Profile/>}/>
          <Route path="/app/item/:itemId" element={<DetailsPage/>} />
          <Route path="/app/search" element={<SearchPage/>} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
          <Route path="/app/addItem" element={<ItemPage />} />
        </Routes>
        </AppProvider>
  );


}

export default App;

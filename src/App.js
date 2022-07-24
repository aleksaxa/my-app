import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Foother from './components/Foother/foother';
import Nav from './components/Nav/nav';
import ProfileConteiner from './components/Profile/profileConteiner';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/settings';
import DialogsConteiner from './components/Dialogs/dialogsConteiner';
import UsersConteiner from './components/Users/usersConteiner';
import HeaderConteiner from './components/Header/headerConteiner';
import Login from './components/Login/login';




const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderConteiner />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/login/*' element={<Login />} />
          <Route path='/dialogs/*' element={<DialogsConteiner />} />
          <Route path='/profile' element={<ProfileConteiner />} />
          <Route path='/profile/:userId' element={<ProfileConteiner />} />
          <Route path='/users/*' element={<UsersConteiner />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/settings/*' element={<Settings />} />
        </Routes>
      </div>
      <Foother />
    </div>
  )
}

export default App;

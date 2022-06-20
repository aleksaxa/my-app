import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/dialogs';
import Foother from './components/Foother/foother';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        {/*}Profile />*/}
        <Dialogs />
      </div>

      <Foother />
    </div>
  );
}

export default App;

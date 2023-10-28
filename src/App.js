import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Foother from './components/Foother/foother';
import Nav from './components/Nav/nav';
import ProfileConteiner, {withRouter} from './components/Profile/profileConteiner';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/settings';
import DialogsConteiner from './components/Dialogs/dialogsConteiner';
import UsersConteiner from './components/Users/usersConteiner';
import HeaderConteiner from './components/Header/headerConteiner';
import Login from './components/Login/login';
import {connect} from 'react-redux';
import {Component} from 'react';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/Common/Preloader/preloader';
import {getAuthUserData} from './redux/auth-reducer';


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
        this.props.getAuthUserData();
    }

    render() {
        if (this.props.isAuth === false) {
            return (
                <div className='app-wrapper-login'>
                    <Login/>
                    <Foother/>
                </div>
            )
        }

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderConteiner/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsConteiner/>}/>
                        <Route path='/profile' element={<ProfileConteiner/>}/>
                        <Route path='/profile/:userId' element={<ProfileConteiner/>}/>
                        <Route path='/users/*' element={<UsersConteiner/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
                <Foother/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, getAuthUserData}))(App);
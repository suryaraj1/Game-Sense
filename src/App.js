import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

const App = () => {
    return (
        <div>
            <Header />
            <hr className="divider"/>
            <SideBar />
        </div>
    )
}

export default App;
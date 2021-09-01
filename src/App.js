import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
        <div>
            <Header />
            <hr className="divider"/>
            <Main />
        </div>
    )
}

export default App;
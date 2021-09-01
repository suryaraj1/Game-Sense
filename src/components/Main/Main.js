import React from 'react';
import GameCardGrid from '../GameCardGrid/GameCardGrid';
import SideBar from '../SideBar/SideBar';
import './Main.css';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genreData: [],
        }
    }

    handleCallback = childGenreData => {
        this.setState({
            genreData: childGenreData
        })
    }

    render() {
        const { genreData } = this.state;
        return (
            <div className='main-wrapper'>
                <SideBar handler={this.handleCallback}/>
                <GameCardGrid genreData={genreData}/>
            </div>
        )
    }
}

export default Main;
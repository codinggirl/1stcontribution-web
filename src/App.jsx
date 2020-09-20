import React, { Component } from 'react';
import './App.css';

import CardsContainer from './ProjectList/CardsContainer';
import Footer from './Footer/Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Let's Make Contribute, to make the open source world great again.</h1>
                </div>
                <CardsContainer />
                <Footer />
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import Main from './components/Main'
import VisibleSidebar from './containers/VisibleSidebar'
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import './css/index.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className='row contentBox'>
                    <div className='col-sm-3'>
                        <VisibleSidebar/>
                    </div>
                    <div className='col-sm-8'>
                        <Main/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;

import React from 'react';
import Main from "./Main"
import '../scss/main.scss'
import Footer from './Footer'
import Header from './Header'

class App extends React.Component{
    render(){
        return(   
                    <div className = "wrapper">
                        <Header/>
                        <div className = "side-left"></div>
                        <div className = "side-right"></div>
                        <Main />
                        <Footer />
                    </div>
        )
    }
}

export default App
import React from 'react';
import Main from "./Main"
import '../scss/main.scss'

class App extends React.Component{
    render(){
        return(
            <div>
            <header>Tutaj bedzie nagłówek</header>
            <Main />
            <footer>Tutaj będzie stopka</footer>
            </div>
        )
    }
}

export default App
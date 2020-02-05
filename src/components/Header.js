import React from 'react';

class Header extends React.Component{
    render(){
        return(<header className = "header">
                <div className="headerOverlay">

                    <h1>Meme Generator</h1>
                    <h3>Just choose the template, add some text and.... <br/>that's it ! </h3>
                    <br/>  
                </div>
               </header>)
    }
}

export default Header


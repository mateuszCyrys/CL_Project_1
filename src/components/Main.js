  import React from 'react';
  import Picture from './Picture'
  import Quotes from '../containers/Quotes'
  import store from '../redux/store';
  import { Provider } from "react-redux";
 
  class Main extends React.Component{
    render(){
      return(
        <div>
          <Provider store={store}>
            <Quotes/>
            <Picture/>
          </Provider>        
        </div>
      )
    }
  }
  export default Main
  





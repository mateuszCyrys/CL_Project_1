  import React from 'react';
  import Picture from './Picture'
  import Quotes from '../containers/Quotes'
  import store from '../redux/store';
  import { Provider } from "react-redux";
 
  class Main extends React.Component{
    render(){
      return(
        <>
          <Provider store={store}>
            <Quotes/>
            <Picture/>
          </Provider>        
        </>
      )
    }
  }
  export default Main
  





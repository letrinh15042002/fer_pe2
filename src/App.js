// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Main from './Components/MainComponent';
// import Example from './Components/Example';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './Components/Store';
// import Counter from './Components/CounterComponents';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

      // <Provider store={store}>
      //   <Counter></Counter>
      // </Provider>


    );
  }
}



export default App;

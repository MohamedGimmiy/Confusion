import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
import {
  BrowserRouter as Router,
} from "react-router-dom";

/* redux components */
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();

class App extends Component {

  render() {
    return (

      <Provider store={store}>
        <Router>
          <div>
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Aux from './hoc/Aux';
import Header from './Components/Header/Header';
import CoinsList from './Containers/CoinsList/CoinsList';
import CoinDetails from './Containers/CoinDetails/CoinDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Aux>
        <div className="App">
          <Header />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/" exact component={CoinsList} />
                <Route path="/:id" component={CoinDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </Aux>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import BalanceControl from './components/balanceControl';

import Header from './components/Header';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AnonymousPage from './components/anonymousPage';

function App() {
  return (
    <div>
        <Router>
          <Header/>

          <Switch>
            <Route exact path='/'>
                <BalanceControl/>
            </Route>
            <Route path='/anonymous'>
                <AnonymousPage/>
            </Route>
          </Switch>

        
        </Router>
    </div>
  );
}

export default App;

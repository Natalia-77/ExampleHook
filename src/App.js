import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Main from './Main'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>         
          <Route exact path="/example"><Main/></Route>         
        </Switch>
      </div>
    </Router>
  );
}

export default App;

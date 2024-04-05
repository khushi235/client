
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './HomePage/home';
import LoginPage from './LoginPage/LoginPage';
import NewUser from './NewUser/NewUser';
import Guide from './GuideData/guidedata';
import RegisterPage from './Register/Register';

function App() {
  return (
  
      <Router>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/guide' component={Guide} />
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/newuser' component={NewUser} />
        </Switch>
      </Router>
  );
}
  
export default App;







import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './dashboard/Dashboard'
import ProjectDetails from './projects/ProjectDetails';
import ProjectList from './projects/ProjectList';
import Signin from './auth/Signin';
import Signup from './auth/Signup'
import Error from './layout/Invalid';
import CreateProject from './projects/CreateProject';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/project/:id" component={ProjectDetails}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/create" component={CreateProject}/>
      <Route path="/invalid" component={Error}/>

    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

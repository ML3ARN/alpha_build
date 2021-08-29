import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from './components/Welcome/Welcome'
import { OnboardingContainer } from './components/Onboarding/Onboarding'


const App = () => {
  return (
    <Router>
    <div className="App">
      <Switch>
       
      <Route exact path="/">
          <Welcome />
      </Route>

      <Route exact path="/onboarding">
        <OnboardingContainer />
      </Route>
      

      </Switch>
       </div>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from './components/Welcome/Welcome'
import { OnboardingContainer } from './components/Onboarding/Onboarding'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import CollapsedProfile from './components/StudentProfile/CollapsedProfile'
import StudentProfile from './components/StudentProfile/StudentProfile'



const useStyles = makeStyles({
  mainContainer : {
    height: "100vh",
    flexDirection: "column",
    padding: "0px",
    maxWidth: "100vw",
    display: "flex"
  }
})



const App = () => {

  const classes = useStyles()
  return (
    <Container className={classes.mainContainer}>
    <Router>
    
      <Switch>
       
      <Route exact path="/">
          <Welcome />
      </Route>

      <Route exact path="/onboarding">
        <OnboardingContainer />
      </Route>

       <Route exact path="/collapsed_profile">
        <CollapsedProfile />
      </Route>


      <Route exact path="/student_profile">
        <StudentProfile />
      </Route>


      </Switch>
       
    </Router>
    </Container>
  );
}

export default App;

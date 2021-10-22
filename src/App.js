import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Hero from "./components/Hero";
import LoginPage from "./pages/Login";
import Header from "./components/Header";
import "./App.css";
import HomePage from "./pages/Home";
import Details from "./pages/Details";

function App(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Hero />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/details/:id/'>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default withRouter(App);

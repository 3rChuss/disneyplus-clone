import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

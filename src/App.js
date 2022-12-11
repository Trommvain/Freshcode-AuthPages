import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LogInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

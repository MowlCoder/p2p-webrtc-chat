import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Room from "./pages/Room";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
              <Route exact path="/room/:id" component={Room}/>
              <Route exact path="/" component={Main}/>
              <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

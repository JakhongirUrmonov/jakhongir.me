import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import SingleBlogPage from "./pages/SingleBlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog/:blogId">
            <SingleBlogPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <Container>
      <h3 style={{ height: "60vh", display: "flex", alignItems: "center" }}>
        No match for <code>{location.pathname}</code>
      </h3>
    </Container>
  );
}
export default App;

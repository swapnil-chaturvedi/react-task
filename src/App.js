import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Cities from "./pages/cities/cities";
import { Provider } from "react-redux";
import { store } from "./core/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Cities} />
          <Route exact path="/All" component={Cities} />
          <Route
            path="/Shortlisted"
            render={(props) => <Cities {...props} isShortList={true} />}
          />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

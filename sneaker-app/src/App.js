import logo from './logo.svg';
import './App.css';

// routing packages
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useMediaQuery } from 'react-responsive';

import Login from "./pages/Login";
import Register from "./pages/Register";
import MyCollection from "./pages/MyCollection";






function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
        <Routes>
            {/* This route is for home component 
  with exact path "/", in component props 
  we passes the imported component*/}
            <Route
                exact
                path="/"
                element={<Login />}
            />

            <Route
                exact
                path="/register"
                element={<Register />}
            />

            <Route
                exact
                path="/mycollection"
                element={<MyCollection />}
            />

            {/* If any route mismatches the upper 
  route endpoints then, redirect triggers 
  and redirects app to home component with to="/" */}
            {/* <Redirect to="/" /> */}
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    </Router>
</>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

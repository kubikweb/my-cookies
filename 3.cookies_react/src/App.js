import React from 'react';
import './App.css';
import Cookies from "./Cookies";
import "./Cookies";
import {CookiesProvider} from "react-cookie";


const App = () => {
  return (
        <CookiesProvider>
            <Cookies/>
        </CookiesProvider>

  );
};

export default App;

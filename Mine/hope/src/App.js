import React from "react";
import ActionList from "./ActionList";
import {Route} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <main>
      <Header />
     
      <Route path="/actions" component={ActionList}/>
      
    </main>
  );
}



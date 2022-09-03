import * as React from 'react';
import './App.css';
import Home from './Home/Home';
import Products from './Products/Products';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
    </Router>
  );
}


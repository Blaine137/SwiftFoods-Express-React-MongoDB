import React from 'react';
import Layout from './components/Layout/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="https://swiftfoods.herokuapp.com/">

        <Layout/>

    </BrowserRouter>
  );
}

export default App;

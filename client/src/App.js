import React from 'react';
import Layout from './components/Layout/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

        <Layout/>

    </BrowserRouter>
  );
}

export default App;

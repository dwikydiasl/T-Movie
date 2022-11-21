import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Router from './router/Index';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;

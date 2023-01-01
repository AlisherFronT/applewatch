import React from 'react'
import Header from "./components/Header/Header";
import './style.css'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;

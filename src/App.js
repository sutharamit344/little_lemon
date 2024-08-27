import './App.css';
import Header from "./component/header";
import Main from "./component/main" ;
import Footer from "./component/footer"
import { useEffect, useState } from 'react';

function App() {
const [active, setActive] = useState("/");

const handleActive = (path) => {
  setActive(path)
}


  return (
    <>
    <Header activeLink={active}/>
    <Main handleActive={handleActive}/>
    <Footer/>
    </>
  );
}

export default App;

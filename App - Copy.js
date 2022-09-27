import "./App.css";
import Login from "./Login";
import Shipaddress from "./Shipaddress";
import PaymentMethod from "./Payment.jsx";
import Card from "./Card";
import Instastory from "./Instastory";
import Navcard from "./Navcard";
import Detail from "./Detail";
import {Routes, Route, Link } from "react-router-dom";
import Caro from "./Caro";
import Singlecaro from "./Singlecaro";
import Ex from "./Ex";
import Nav from "./Nav";
import Footer from './Footer'
// import Myundeanimation1 from "./Myundeanimation1";
// import Myunde2 from "./Myunde2";
// import Myunde3 from "./Myunde3";
// import Myunde4 from "./Myunde4";
// import Myunde5 from "./Myunde5";

function App() {
  return (
    <div className="bg-black">
         <Nav/> 
     <Routes>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/" element={<Singlecaro/>}/> 
     </Routes>
         <Footer/> 
        {/* <Myundeanimation1 /> */}
         {/* <Myunde2/> */}
        {/* {/* <Myunde3/> */}
            {/* <Myunde4/>  */}
            {/* <Myunde5/>  */}
            
    </div>
  )
}
export default App;
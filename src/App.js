import {  Routes, Route } from "react-router-dom";
import Newbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SignUp from "./Credentials/Signup";
import Login from "./Credentials/Login";

function App() {
    return(
        <>
        <Newbar/>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>

          <Route path="Signup" element={<SignUp />} />
          <Route path="Signup/Login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
      </>
    )
}

export default App;
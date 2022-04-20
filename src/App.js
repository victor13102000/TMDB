import { Route, Routes,useLocation } from "react-router";
import Navbar from "./components/Navbar";
import { Heading } from "@chakra-ui/react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home";
import GridGeneral from "./components/Grid";
import  GridSearch from './components/GridSearch'
import Simple from "./components/Simple";
import Favorites from './components/Favorites'



const App = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/login/wasLogged").then((userLoged) => {
    localStorage.setItem("user", userLoged.data)
    });
  }, []);
  return (
    <>
      <Heading>
        <Navbar />
      </Heading>
    
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/media/:type" element={<GridGeneral/>}/>
        <Route path="/search/:type" element={<GridSearch/>}/>
        <Route path="/simpleview/:id/:type" element={<Simple/>}/>
        <Route path="/favorite/:id" element={<Favorites/>}/>
      
        
      </Routes>

    </>
  );
};

export default App;

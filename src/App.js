import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import { Heading } from "@chakra-ui/react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import axios from "axios";
import { useEffect } from "react";

import GridGeneral from "./components/Grid";



const App = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/api/login/wasLogged").then((userLoged) => {
      localStorage.setItem("user", userLoged.data);
    });
  }, []);
  return (
    <>
      <Heading>
        <Navbar />
      </Heading>
    
      <Routes>
        <Route path="/" element={ <GridGeneral/> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

    </>
  );
};

export default App;

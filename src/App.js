import NavBar from "./components/Navbar";
import Home from "./components/home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import SkillSection from "./components/Skills";
import Certifications from "./components/Certification";
import Footer from "./components/Footer";

import { useState,useEffect } from "react";
function App() {
  const [smallScreen,setIsSmallScreen]=useState(window.innerWidth<=750);
    
  useEffect(() => {
    // Function to update isSmallScreen state
    function handleResize() {
        setIsSmallScreen(window.innerWidth <= 750);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set initial state
    handleResize();
    
    // Clean up by removing event listener when component unmounts
    return () => {
        window.removeEventListener('resize', handleResize);
        
    };
}, [smallScreen]);
  return (
    
      <div >
        <NavBar smallScreen={smallScreen}/>
        <Home />
      <SkillSection smallScreen={smallScreen} />
       
        <Projects />
        <Education />
        <Certifications/>
        <Footer/>
        
       
        
      </div>
      
     
  );
}

export default App;

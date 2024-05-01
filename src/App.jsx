import NavBar from "./components/Navbar";
import Home from "./components/home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import SkillSection from "./components/Skills";
import Certifications from "./components/Certification";
import Footer from "./components/Footer";

import { useState,useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
    
      <ThemeProvider theme={darkTheme} >
          <CssBaseline/>
          <NavBar smallScreen={smallScreen}/>
          <Home />
          <SkillSection smallScreen={smallScreen} />
          <Projects />
          <Education />
          <Certifications smallScreen={smallScreen}/>
          <Footer/>
      </ThemeProvider>
      
     
  );
}

export default App;

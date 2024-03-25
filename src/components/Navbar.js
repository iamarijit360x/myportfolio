import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useState ,useEffect} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function NavBar(){
    //Items for Navbar
    const items=[{title:"Home",id:"home"},{title:"Skills",id:"skill"},{title:"Projects",id:"projects"},{title:"Education",id:"education"}]
    //Floating NavBar
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
                     window.addEventListener('scroll', handleScroll);
                     return () => {
                    window.removeEventListener('scroll', handleScroll);
                     };
                }, []);

  function handleScroll(){
    if (window.scrollY > 0) 
      setShowNavbar(true);
    else 
      setShowNavbar(false);
    
  };

  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
 //Floating Navbar Ends


    //Handling Navbar Clicking
    function focus(id){
        const element =document.getElementById(id)
        element.scrollIntoView({behavior:"smooth"})
    }
    return(
        <>
       
        
        <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Arijit Banerjee</Typography>
                    {items.map(item=>
                        
                        <Button onClick={()=>focus(item.id)} color="inherit">{item.title}</Button>
                        )}
        
                </Toolbar>
            </AppBar>
            
            {showNavbar && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '50%', padding: '8px', cursor: 'pointer' }} onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </div>
      )}
            </>
    )
}
import { AppBar, Toolbar, Typography, IconButton,Button, Menu, MenuItem } from '@mui/material';
import { useState ,useEffect} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import { Container } from 'react-bootstrap';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function NavBar({smallScreen}){
    //Floating Navbar Zoom Effect
    
    const [anchorEl, setAnchorEl] = useState(null);
    
    const [hoverItem,setHoverItem]=useState(null);
    const [showNavbar, setShowNavbar] = useState(false);
 

    
    function handleMouseEnter(id){
      setHoverItem(id)
    }
    function handleMouseELeave(id){
      setHoverItem(null)
    }
    //Items for Navbar
    const items=[{title:"Home",id:"home",icon:<HomeIcon/>},
    {title:"Skills",id:"skill",icon:<EngineeringIcon/>},
    {title:"Projects",id:"projects",icon:<CodeIcon/>},
    {title:"Education",id:"education",icon:<SchoolIcon/>},
    {title:"Certifications",id:"certifications",icon:<EmojiEventsIcon/>}
  ]
    
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
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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


    const Mobile_comp = ()=>{
      return (
        <AppBar position="fixed" style={{ width: "100%" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Arijit</Typography>
                    <IconButton onClick={handleMenuClick} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left', // Adjusted to left
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left', // Adjusted to left
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      
                    >
                        {items.map(item => (
                            <MenuItem key={item.id} onClick={() => { handleMenuClose(); focus(item.id); }}>
                                {item.title}
                            </MenuItem>
                        ))}
                        <MenuItem style={{}} onClick={() => { handleMenuClose(); window.location.href = ''; }}>
                            Download CV
                            <FileDownloadIcon />
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
      )
    }
    const Normal_comp = ()=>{
      return (
        <AppBar position="fixed" style={{width:"100%"}}>
               <Toolbar> 
                    <Typography variant="" component="div" sx={{ flexGrow: 1 }}>ArijitX</Typography>
                    <Container style={{display:"flex",justifyContent:"space-around"}}>
                        {items.map(item=>
                            
                            <Button onClick={()=>focus(item.id)} color="inherit">{item.icon}{item.title}</Button>
                            )}
                        <Button onClick={()=>{window.location.href='https://arijitx-resume.tiiny.site/'}} color="inherit">Download CV<FileDownloadIcon/></Button>
                        
                    </Container>
                </Toolbar>
            </AppBar>
      )
    }
    return(
        <>
       
        
        {smallScreen?<Mobile_comp/>:<Normal_comp/>}
            
            {showNavbar && (
            <div style={{position: 'fixed',display:"flex",rowGap:"10px",justifyContent:"space-between",flexDirection:"column",bottom: '20px', right: '20px', backgroundColor:"transparent", borderRadius:"2px", padding: '8px', cursor: 'pointer'}} >
           
              {items.map(item=>(
                <div onClick={()=>focus(item.id)} onMouseEnter={()=>handleMouseEnter(item.id)} onMouseLeave={handleMouseELeave} style={{transform:hoverItem===item.id?'scale(1.5)':null,transition: 'transform 0.3s ease-in-out'}}>
                  {item.icon}
                </div>

              ))}

              <div onMouseEnter={()=>handleMouseEnter('homearrow')} onMouseLeave={handleMouseELeave} style={{border:"1px solid black",borderRadius:"50%",transform:hoverItem==='homearrow'?'scale(1.5)':null,transition: 'transform 0.3s ease-in-out'}}>
              <ArrowUpwardIcon id="homearrow" onClick={scrollToTop}  />
              </div>
            </div>
      )}
            </>
    )
}
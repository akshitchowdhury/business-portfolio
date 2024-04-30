import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import { Code, Collections,  Contacts,  Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import './Navbar.css'
function Navbar() {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box
        sx={{ width: 250,
      backgroundColor: 'black',
      padding: 4 , 
      height: 700
      
       }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            <Link to="/">
              <ListItemButton>
              <ListItem>
                <ListItemIcon>
                     <HomeIcon style={{color: 'white'}}/>       
                </ListItemIcon>
                
                <ListItemText primary={"Home"} className='text-white hover:text-amber-300 transition ease-in-out
                duration-300'/>
                </ListItem>
                </ListItemButton>
                </Link>

                <Link to="/about" >
                <ListItemButton>
                <ListItem>
                <ListItemIcon>
                     <Person style={{color: 'white'}}/>            
                </ListItemIcon>
                
                <ListItemText primary={"About"} 
                  className='text-white hover:text-amber-300 transition ease-in-out
                duration-300'
                />
                </ListItem>
                </ListItemButton>
                </Link>


                
                <Link to="/services" >
               <ListItemButton>
                <ListItem>
                <ListItemIcon>
                     <Code style={{color: 'white'}}/>              
                </ListItemIcon>               
                <ListItemText primary={"Services"} 
                  className='text-white hover:text-amber-300 transition ease-in-out
                duration-300'
                />
                </ListItem>
                </ListItemButton>
                </Link>

                
                <Link to="/portfolio" >
                <ListItemButton>
                <ListItem>
                <ListItemIcon>
                     <Collections style={{color: 'white'}}/>          
                </ListItemIcon>
                
                <ListItemText primary={"Portfolio"} 
                  className='text-white hover:text-amber-300 transition ease-in-out
                duration-300'
                />
                </ListItem>
                </ListItemButton>
                </Link>

                
                
           
        </List>
        <Divider sx={{backgroundColor: 'white'}}/>
        <List>
          {[{
            contact : 'Contact',
            link : "/contact",
            text: "Contact",
            
            icon : <Contacts/>},
            ].map((item, index) => (
            <ListItem
            style={{marginLeft: '9%'}}
             key={index} disablePadding>
            <Link to = {item.link}> 
              <ListItemButton>
                <ListItemIcon
                 style={{color: 'white'}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                 className='text-white hover:text-amber-300 transition ease-in-out
                duration-300'
                 primary={item.text} 
                  
                />
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <div className='navButton bg-inherit sticky top-24 z-50 -my-10 '>
        <Button onClick={toggleDrawer(true)}><RememberMeIcon/></Button>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  }
  
export default Navbar

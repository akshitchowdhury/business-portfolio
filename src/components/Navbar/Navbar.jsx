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
import { Code, Collections,  Contacts,  Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';

function Navbar() {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box
        sx={{ width: 250,
      backgroundColor: 'white',
      padding: 2,
      height: 700
      
       }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            <Link to="/">
              <ListItemButton>
              <ListItem>
                <ListItemIcon>
                     <HomeIcon />       
                </ListItemIcon>
                
                <ListItemText primary={"Home"} style={{
                  color : 'black'
                }}/>
                </ListItem>
                </ListItemButton>
                </Link>

                <Link to="/about" >
                <ListItemButton>
                <ListItem>
                <ListItemIcon>
                     <Person/>            
                </ListItemIcon>
                
                <ListItemText primary={"About"} />
                </ListItem>
                </ListItemButton>
                </Link>


                <ListItemButton>
                <ListItem>
                <ListItemIcon>
                     <Collections/>          
                </ListItemIcon>
                
                <ListItemText primary={"Portfolio"} />
                </ListItem>
                </ListItemButton>

               <ListItemButton>
                <ListItem>
                <ListItemIcon>
                     <Code/>              
                </ListItemIcon>
                
                <ListItemText primary={"Services"} />
                </ListItem>
                </ListItemButton>
                
                
           
        </List>
        <Divider />
        <List>
          {[{
            contact : 'Contact',
            link : "/contact",
            text: "Contact",
            icon : <Contacts/>}].map((item, index) => (
            <ListItem key={index} disablePadding>
            <Link to = {item.link}> 
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <div className='bg-inherit sticky top-24 z-50 -my-10 '>
        <Button onClick={toggleDrawer(true)}><RadioButtonCheckedIcon/></Button>

        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  }
  
export default Navbar
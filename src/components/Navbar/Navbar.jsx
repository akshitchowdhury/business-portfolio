import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import {
  Code,
  Collections,
  Contacts,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import pic from "../../assets/profile.jpg";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        padding: 4,
        height: 700,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div
        style={{
          color: "white",
          fontSize: 40,
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          width: 60,
          height: 60,
        }}
        className="mx-6 my-10"
      >
        {" "}
        <h1 className=" mx-20 text-lg text-white"> Pratikshit Chowdhury</h1>
      </div>
      <List>
        <Link  onClick={handleClick} to
="/"> 
          <ListItemButton
          >
            <ListItem>
              <ListItemIcon>
                <HomeIcon style={{ color: "white" }} />
              </ListItemIcon>

              <ListItemText
                primary={"Home"}
                className="text-white hover:text-amber-300 
                transition ease-in-out duration-300
                hover:scale-125"
              />
            </ListItem>
          </ListItemButton>
        </Link>

        <Link  onClick={handleClick} to
="/about">
          <ListItemButton
          >
            <ListItem>
              <ListItemIcon>
                <Person style={{ color: "white" }} />
              </ListItemIcon>

              <ListItemText
                primary={"About"}
                className="text-white hover:text-amber-300 transition ease-in-out duration-300 hover:scale-125"
              />
            </ListItem>
          </ListItemButton>
        </Link>

        <Link  onClick={handleClick} to
="/services">
          <ListItemButton
          >
            <ListItem>
              <ListItemIcon>
                <Code style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary={"Services"}
                className="text-white hover:text-amber-300 transition ease-in-out duration-300 hover:scale-125"
              />
            </ListItem>
          </ListItemButton>
        </Link>

        <Link  onClick={handleClick} to
="/portfolio">
          <ListItemButton
          >
            <ListItem>
              <ListItemIcon>
                <Collections style={{ color: "white" }} />
              </ListItemIcon>

              <ListItemText
                primary={"Portfolio"}
                className="text-white hover:text-amber-300 transition ease-in-out duration-300 hover:scale-125"
              />
            </ListItem>
          </ListItemButton>
        </Link>
      </List>
      <Divider sx={{ backgroundColor: "white" }} />
      <List>
        {[
          {
            contact: "Contact",
            link: "/contact",
            text: "Contact",
            icon: <Contacts />,
          },
        ].map((item, index) => (
          <ListItem style={{ marginLeft: "9%" }} key={index} disablePadding>
            <Link  onClick={handleClick} to
={item.link}>
              <ListItemButton
              >
                <ListItemIcon style={{ color: "white" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className="text-white hover:text-amber-300 transition ease-in-out duration-300 hover:scale-125"
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
    <div className="navButton bg-inherit sticky top-24 z-50 -my-10 ">
      <Button onClick={toggleDrawer(true)}>
        <RememberMeIcon />
      </Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Navbar;

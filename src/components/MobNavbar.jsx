import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MobNavbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const renderDrawer = () => (
    <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/counter">
          <ListItemText primary="Counter" />
        </ListItem>
        <ListItem button component={Link} to="/userform">
          <ListItemText primary="User Form" />
        </ListItem>
        <ListItem button component={Link} to="/richtexteditor">
          <ListItemText primary="Rich Text Editor" />
        </ListItem>
        {user ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: "#fa6d2b" }}>
      <Toolbar>
      
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>

        
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/dashboard" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
            React Assignment
          </Link>
        </Typography>

        {!user ? (
          <>
            <Button color="inherit" component={Link} to="/login" style={{fontWeight: "bold"}}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register" style={{fontWeight: "bold"}}>
              Register
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout} style={{fontWeight: "bold"}}>
            Logout
          </Button>
        )}
      </Toolbar>

      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        {renderDrawer()}
      </Drawer>
    </AppBar>
  );
};

export default MobNavbar;

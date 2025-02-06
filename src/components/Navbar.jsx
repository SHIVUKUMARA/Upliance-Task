import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); 
  };

  return (
    <AppBar position="static" color="info" style={{ backgroundColor: "#fa6d2b" }}>
      <Toolbar>
        
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
            <strong>React Assignment</strong>
          </Link>
        </Typography>

        {!user ? (
          <>
            <Button color="inherit" component={Link} to="/login">
              <strong>Login</strong>
            </Button>
            <Button color="inherit" component={Link} to="/register">
              <strong>Register</strong>
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/dashboard">
              <strong>Dashboard</strong>
            </Button>
            <Button color="inherit" component={Link} to="/userform">
              <strong>User Form</strong>
            </Button>
            <Button color="inherit" component={Link} to="/counter">
              <strong>Counter</strong>
            </Button>
            <Button color="inherit" component={Link} to="/richtexteditor">
              <strong>Rich Text Editor</strong>
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              <strong>Logout</strong>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

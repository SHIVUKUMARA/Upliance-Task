import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4">Welcome to Our Web App</Typography>
      <Typography variant="subtitle1">A simple React project with authentication</Typography>
      <Button variant="contained" color="primary" style={{ margin: "10px" }} component={Link} to="/login">
        Login
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/register">
        Register
      </Button>
    </Container>
  );
};

export default Home;

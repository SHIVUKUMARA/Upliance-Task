import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

 const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
    setUser({ email: credentials.email });
    toast.success("Login Successful!", { position: "top-right" });

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000); 
  } else {
    toast.warning("Invalid Credentials! Please check your email and password.", { position: "top-right" });
  }
};


  const handleRegisterRedirect = () => {
    navigate("/register"); 
  };

  return (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
    <div className="card p-5 shadow" style={{ width: "100%", maxWidth: "400px" }}>
      <Typography variant="h4" className="mb-3 text-center">Login</Typography>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <TextField
            label="Email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            fullWidth
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            fullWidth
            required
            className="form-control"
          />
        </div>
        <Button type="submit" variant="contained" color="primary" className="w-100">Login</Button>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          className="w-100 mt-3"
          onClick={handleRegisterRedirect}
        >
          Register
        </Button>
      </form>
    </div>
    <ToastContainer position="top-right" autoClose={3000} />
  </Container>
);

};

export default Login;

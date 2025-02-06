import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useLocalStorage from "../hooks/useLocalStorage";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [storedUser, setStoredUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setStoredUser(formData);
    toast.success("Registration Successful! You can now login.", { position: "top-right" });

    setTimeout(() => {
      navigate("/login");
    }, 2000); 
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card p-5 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <Typography variant="h4" className="mb-3 text-center">Register</Typography>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              className="form-control"
            />
          </div>
          <Button type="submit" variant="contained" color="primary" className="w-100">Register</Button>
        </form>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          className="w-100 mt-3"
          onClick={handleLoginRedirect}
        >
          Already have an account? Login
        </Button>
      </div>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default Register;

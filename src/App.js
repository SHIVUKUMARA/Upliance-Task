import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import MobNavbar from "./components/MobNavbar";
import { AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  // State for detecting screen size
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width and update the state accordingly
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider 768px as the breakpoint for mobile screens
    };

    checkScreenSize(); // Check screen size on initial render
    window.addEventListener("resize", checkScreenSize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up the event listener on unmount
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        {/* Conditionally render the Navbar or MobNavbar based on screen size */}
        {isMobile ? <MobNavbar /> : <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="/counter"
            element={<ProtectedRoute element={<Counter />} />}
          />
          <Route
            path="/userform"
            element={<ProtectedRoute element={<UserForm />} />}
          />
          <Route
            path="/richtexteditor"
            element={<ProtectedRoute element={<RichTextEditor />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

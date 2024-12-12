import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

    // Navigate after successful login
    navigate("/book-management"); // Replace history.push with navigate
  };

  return (
    <div>
      {/* Login form */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for email and password */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

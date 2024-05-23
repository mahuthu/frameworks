import React from "react";
import backgroundImage from "../Dataset/nairobi2.jpg"

const Login = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const wrapperStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#fff"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#32325C",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  };

  const linkStyle = {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#41E096",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={wrapperStyle}>
        <h2 style={titleStyle}>SIGN IN</h2>
        <form style={formStyle}>
          <input type="text" placeholder="username" style={inputStyle} />
          <input type="password" placeholder="password" style={inputStyle} />
          <button type="submit" style={buttonStyle}>LOGIN</button>
          <p style={{ marginBottom: "10px" }}>
            <span style={linkStyle}>DO YOU REMEMBER YOUR PASSWORD?</span>
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Login;

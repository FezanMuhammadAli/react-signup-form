import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [valid, setValid] = useState(false);
  const [validText, setValidText] = useState("");

  document.body.style.margin = "0";
  document.body.style.padding = "0";

  const container = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#84C7AE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  };

  const accountContainer = {
    width: "400px",
    height: "400px",
    backgroundColor: "#F6FBF9",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    fontFamily: "sans-serif",
    opacity: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    paddingBottom: "20px",
  };
  const linkStyle = {
    color: "#84C7AE",
    textDecoration: "none",
    fontWeight: "bold",
  };
  return (
    <div style={container}>
      <div style={accountContainer}>
        <h2 style={{ textAlign: "center" }}>Create An Account</h2>
        <p
          style={{
            textAlign: "center",
            width: "80%",
            margin: "0 auto",
            marginTop: "0px",
            marginBottom: "20px",
          }}
        >
          Create an account to enjoy all the services without any ads for free
        </p>
        <Input
          placeholder="Email Address"
          type="email"
          email={email}
          setEmail={setEmail}
        />
        <Input
          placeholder="Password"
          type="password"
          password={password}
          setPassowrd={setPassowrd}
        />
        <Button
          text="Create Account"
          email={email}
          setEmail={setEmail}
          setPassowrd={setPassowrd}
          password={password}
          valid={valid}
          setValid={setValid}
          validText={validText}
          setValidText={setValidText}
        />
        {valid ? <p>{validText}</p> : <p>{validText}</p>}
        <p
          style={{
            textAlign: "center",
            width: "80%",
            margin: "0 auto",
          }}
        >
          Already have an account?{" "}
          <a href="#" style={linkStyle}>
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

function Input({ placeholder, type, password, setPassowrd, email, setEmail }) {
  const inputStyle = {
    width: "80%",
    height: "50px",
    margin: "10px auto",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    paddingLeft: "10px",
    fontSize: "16px",
  };
  return (
    <input
      style={inputStyle}
      type={type}
      placeholder={placeholder}
      value={type === "password" ? password : email}
      onChange={(e) =>
        type === "password"
          ? setPassowrd(e.target.value)
          : setEmail(e.target.value)
      }
    />
  );
}

function Button({
  text,
  password,
  email,
  setValid,
  setEmail,
  setPassowrd,
  setValidText,
}) {
  function handlValid() {
    const isEmailValid = email.endsWith("@gmail.com");
    const isPasswordValid = password.length >= 8;

    if (isEmailValid && isPasswordValid) {
      setValid(true);
      setValidText("Great account registered.");
      setPassowrd("");
      setEmail("");
    } else {
      setValid(false);
      setValidText("Invalid email or password.");
    }
  }
  const btnStyle = {
    width: "40%",
    height: "50px",
    margin: "10px auto",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#84C7AE",
    cursor: "pointer",
    color: "#fff",
    marginBottom: "20px",
  };
  return (
    <button style={btnStyle} onClick={handlValid}>
      {text}
    </button>
  );
}

// function ValidityCheck({ valid }) {
//   const message = valid ? "Great account registered." : "";

//   const checkStyle = {
//     marginBottom: "20px",

//     opacity: ".9",
//   };

//   return (
//     <div style={checkStyle}>
//       <span>{message}</span>
//     </div>
//   );
// }

export default App;

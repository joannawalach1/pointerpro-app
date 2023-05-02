/* eslint-disable no-restricted-globals */
import React, { useRef, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "../api/Axios";
import Logo from "../images/pointerpro_logo.svg";

const LOGGED_URL = "/authentification";

const Login = () => {
  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGGED_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCreditentials: true
        }
      );
      setUsername("");
      setPassword("");
    } catch (error) { 
      if (!error?.response) 
        setErrMsg("No response");
       else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password")
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login Failed")
      }
    }

    errRef.current.focus();
  };
  return (
    <>
     (
        <section className="home">
          <div className="home__form">
            <img src={Logo} alt="logo" className="home__img" />
            <div className="home__form--wrapper">
              <p className="home__form--text1">
                The tool is fired up and rrrready to go, log in here:
              </p>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="home__form--text2">
                  Username
                </label>
                <input
                  className="home__form--input"
                  type="text"
                  id="username"
                  placeholder="Username"
                  ref={usernameRef}
                  name="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="password" className="home__form--text2">
                  Password
                </label>
                <input
                  className="home__form--input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  autoComplete="off"
                  required
                />
                <p className="home__form--checkbox">
                  <Link to="/Reminder" className="home__form--href">
                    Forgot your password?
                  </Link>
                </p>

                <button className="home__button">Login</button>
                <p>
                  Don't have an account yet? Join the fun and
                  <Link to="/Register" className="home__form--href">
                    sign up!
                  </Link>
                </p>
              </form>
            </div>
            <Link to="/" className="home__form--href">
              Get Help
            </Link>
          </div>
          <div className="home__banner">
            <div className="home__banner--wrapper">
              <h2 className="home__banner--h2">Great to see you again!</h2>
            </div>
          </div>
        </section>
      )
    </>
  );
};

export default Login;

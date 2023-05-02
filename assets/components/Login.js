/* eslint-disable no-restricted-globals */
import React, { useRef, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "../api/Axios";
import Logo from "../images/pointerpro_logo.svg";

const Login = () => {
  const loginRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
   loginRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [login, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(`http://127.0.0.1:8000/api/users/${id}`, {
        login: login, 
        password: password
        } 
      );
      setLogin("");
      setPassword("");
      console.log(error)
    } catch (error) { 
      if (!error?.response) 
        setErrMsg("No response");
       else if (error.response?.status === 500) {
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
                <label htmlFor="login" className="home__form--text2">
                  Username
                </label>
                <input
                  className="home__form--input"
                  type="text"
                  id="login"
                  placeholder="Login"
                  ref={loginRef}
                  name="login"
                  autoComplete="off"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  <Link to="/" className="home__form--href">
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

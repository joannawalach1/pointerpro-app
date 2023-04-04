import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pointerpro_logo.svg";


const Login = () => {
  return (
    <section className="home">
      <div className="home__form">
        <img src={Logo} alt="logo" className="home__img" />
        <div className="home__form--wrapper">
          <p className="home__form--text1">
          The tool is fired up and rrrready to go, log in here:
          </p>
          <label htmlFor="email" className="home__form--text2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="home__form--input"
            placeholder="joanna.walach@op.pl"
          />
          <label htmlFor="password" className="home__form--text2">
            Password
          </label>
          <input
            type="password"
            className="home__form--input"
            name="password"
          />
          <p className="home__form--checkbox">
            <Link to="/Reminder" className="home__form--href">
              Forgot your password?
            </Link>
          </p>

          <button type="submit" className="home__button">
            Login
          </button>
          <p>
            Don't have an account yet?
            Join the fun and <a href="/" className="home__form--href">
              sign up!
            </a>
          </p>
        </div>
        <a href="/" className="home__form--href">
          Get Help
        </a>
      </div>
      <div className="home__banner">
        <div className="home__banner--wrapper">
          <h2 className="home__banner--h2">
          Great to see you again!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Login;

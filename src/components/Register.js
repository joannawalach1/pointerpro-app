import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pointerpro_logo.svg";


const Register = () => {
  return (
    <section className="home">
      <div className="home__form">
        <img src={Logo} alt="logo" className="home__img" />
        <div className="home__form--wrapper">
          <p className="home__form--text1">
            Please create an account first to sign up for your trial of the
            professional plan
          </p>
          <label htmlFor="name" className="home__form--text2">
            First name
          </label>
          <input
            type="text"
            name="name"
            className="home__form--input"
            placeholder="John"
          />
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
            I accept the
            <Link to="/" className="home__form--href">
              Terms of Use
            </Link>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </p>

          <button type="submit" className="home__button">
            Create my account
          </button>
          <p>
            Already a member?
            <Link to="/Login" className="home__form--href">
              Log in
            </Link>
          </p>
        </div>
        <Link to="/" className="home__form--href">
          Get Help
       </Link>
      </div>
      <div className="home__banner">
        <div className="home__banner--wrapper">
          <h5 className="home__banner--h5">Let's get to know each other!</h5>
          <h2 className="home__banner--h2">
            Sign up for your free trial today
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Register;

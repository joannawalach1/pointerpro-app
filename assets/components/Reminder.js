import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/pointerpro_logo.svg";

const Reminder = () => {
  return (
    <section className="home">
    <div className="home__form">
      <img src={Logo} alt="logo" className="home__img" />
      <div className="home__form--wrapper">
        <p className="home__form--text1">
        No worries, it happens to the best of us. Just enter your account’s email address and we’ll send you a link to reset your password.
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

        <button type="submit" className="home__button">
          Recover password
        </button>
        <p>
          Remember password?  <Link to="/" className="home__form--href">
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
        <h2 className="home__banner--h2">
        Recover Password
        </h2>
      </div>
    </div>
  </section>
  )
}

export default Reminder
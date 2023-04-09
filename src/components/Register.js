import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pointerpro_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const username_regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const email_regex = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,9})/;
const password_regex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const Register = () => {
  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = username_regex.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = email_regex.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = password_regex.test(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, email,matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = username_regex.test(username);
    const v2 = email_regex.test(email);
    const v3 = password_regex.test(password);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid entry");
      return;
    }
    setSuccess(true);
  }
  return (
    <>
      {success ? (
        <section>
          <h1>success</h1>
          <p><a href="#">Sign In</a></p>
        </section>
      ) : (
        <section className="home">
          <div className="home__form">
            <img src={Logo} alt="logo" className="home__img" />
            <div className="home__form--wrapper">
              <p className="home__form--text1">
                Please create an account first to sign up for your trial of the
                professional plan
              </p>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="home__form--text2">
                  First name
                  <span className={validUsername ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validUsername || !username ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
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
                  onBlur={() => setUsernameFocus(false)}
                  onFocus={() => setUsernameFocus(true)}
                  aria-invalid={validUsername ? "false" : "true"}
                  aria-describedby="usernamenote"
                  required
                />
                <p
                  id="usernamenote"
                  className={
                    usernameFocus && username && !validUsername
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" color="orange" />
                   8 to 50 characters. <br />
                  The username can contain only letters and numbers. <br />
                </p>
                <label htmlFor="email" className="home__form--text2">
                  Email address
                  <span className={validEmail ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validEmail || !email ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="home__form--input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailFocus(false)}
                  onFocus={() => setEmailFocus(true)}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  autoComplete="off"
                  required
                />
                <p
                  id="emailnote"
                  className={
                    emailFocus && email && !validEmail
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" color="orange" />
                  8 to 50 characters. <br />
                  The email must have correct email format<br />
                </p>
                <label htmlFor="password" className="home__form--text2">
                  Password
                  <span className={validPassword ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validPassword || !email ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
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
                  onBlur={() => setPasswordFocus(false)}
                  onFocus={() => setPasswordFocus(true)}
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="passwordnote"
                  required
                />
                <p
                  id="passwordnote"
                  className={
                    passwordFocus && password && !validPassword
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} size="lg" color="orange" />
                  8 to 50 characters. <br />
                  It must contain a big letter, letters<br />
                  numbers, symbols.
                </p>
                <p className="home__form--checkbox">
                  I accept the
                  <Link to="/" className="home__form--href">
                    Terms of Use
                  </Link>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </p>

                <button
                  disabled={!validUsername || !validPassword || !validEmail ? true : false}
                  className="home__button"
                >
                  Create my account
                </button>

                <p>
                  Already a member?
                  <Link to="/Login" className="home__form--href">
                    Log in
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
              <h5 className="home__banner--h5">Let's get to know each other!</h5>
              <h2 className="home__banner--h2">
                Sign up for your free trial today
              </h2>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Register;

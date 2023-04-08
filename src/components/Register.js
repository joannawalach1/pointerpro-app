import React, { useState } from "react";
import { Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../assets/pointerpro_logo.svg";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username must be max 50 characters!!")
    .required("Username is a required field"),
  email: Yup.string()
    .email("Invalid email format")
    .min(2, "Email must be at least 2 characters!")
    .max(50, "Email must be max 50 characters!!")
    .required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
});

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className="home">
      <div className="home__form">
        <img src={Logo} alt="logo" className="home__img" />
        <div className="home__form--wrapper">
          <p className="home__form--text1">
            Please create an account first to sign up for your trial of the
            professional plan
          </p>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
              <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="name" className="home__form--text2">
                  First name
                </label>
                <Field
                  className="home__form--input"
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
               <ErrorMessage name="username" />
                <label htmlFor="email" className="home__form--text2">
                  Email address
                </label>
                <Field
                  className="home__form--input"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="off"
                  required
                  placeholder="email"
                />
              <ErrorMessage name="email" />
                <label htmlFor="password" className="home__form--text2">
                  Password
                </label>
                <Field
                  className="home__form--input"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  autoComplete="off"
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  placeholder="password"
                />
              <ErrorMessage name="password" />
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

                <button type="submit" className="home__button" disabled>
                  Create my account
                </button>
              </form>
          </Formik>
          {username}, {email}, {password}
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

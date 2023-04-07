import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../assets/pointerpro_logo.svg";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Email must be max 50 characters!!")
    .required("Username is a required field"),
  email: Yup.string()
    .email("Invalid email format")
    .min(2, "Email must be at least 2 characters!")
    .max(50, "Email must be max 50 characters!!")
    .required("Required"),
  password: Yup.string().required("Required"),
});

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const handleChange = (e) => {
    setUsername(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
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
              alert(JSON.strginify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
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
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Username"
                />
                <p>{errors.username && touched.username && errors.username}</p>
                <label htmlFor="email" className="home__form--text2">
                  Email address
                </label>
                <Field
                  className="home__form--input"
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  required
                  placeholder="email"
                />
                <p>{errors.email && touched.email && errors.email}</p>
                <label htmlFor="password" className="home__form--text2">
                  Password
                </label>
                <Field
                  className="home__form--input"
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="password"
                />
                <p className="error">
                  {errors.password && touched.passsword && errors.password}
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

                <button type="submit" className="home__button">
                  Create my account
                </button>
              </form>
            )}
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

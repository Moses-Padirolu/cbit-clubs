import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function CNavbar() {
  const [club, setClub] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    // Validation for club name (first letter capital)
    if (!/^[A-Z][a-z]*$/.test(club)) {
      newErrors.club = "Club name should have the first letter capital.";
    }

    // Validation for name (first letter capital)
    if (!/^[A-Z][a-z]*$/.test(name)) {
      newErrors.name = "Name should have the first letter capital.";
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    // Validation for position (first letter capital)
    if (!/^[A-Z][a-z]*$/.test(position)) {
      newErrors.position = "Position should have the first letter capital.";
    }

    // Validation for password (length greater than 8 digits)
    if (password.length < 8) {
      newErrors.password =
        "Password should have a length greater than 8 digits.";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // If all validations pass, proceed with navigation
    if (club === "Robovanza") {
      navigate("../robovanzaadmin", {
        state: {
          name,
          email,
          position,
          password,
        },
      });
    }
    if (club === "Spandana") {
      navigate("../spandanaadmin", {
        state: {
          name,
          email,
          position,
          password,
        },
      });
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top "
        style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}
      >
        <div className="container ">
          <p className="navbar-brand" style={{ color: "InactiveCaptionText" }}>
            Chaitanya Bharathi Institute Of Technology
          </p>

          {/* Add the toggler button for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Add the navigation items with a unique ID (data-target) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item px-4">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink
                  className="nav-link"
                  to="/clubs"
                  activeClassName="active"
                >
                  Clubs
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item px-4 ">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal fade " id="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header text-dark border-0">
              <button
                className="btn-close bg-light"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body text-light pt-0">
              <div className="container mt-5">
                <form
                  className="needs-validation"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="mb-2">
                    <h4 className="text-center">Log Into The Club</h4>
                    <label htmlFor="text" className="form-label">
                      Club Name
                    </label>
                    <input
                      type="text"
                      className={`form-control bg-dark text-light ${
                        errors.club ? "is-invalid" : ""
                      }`}
                      onChange={(e) => setClub(e.target.value)}
                      required
                    />
                    {errors.club && (
                      <div className="invalid-feedback">{errors.club}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className={`form-control bg-dark text-light ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control bg-dark text-light ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      What is your position in the club?
                    </label>
                    <input
                      type="text"
                      className={`form-control bg-dark text-light ${
                        errors.position ? "is-invalid" : ""
                      }`}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                    />
                    {errors.position && (
                      <div className="invalid-feedback">{errors.position}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control bg-dark text-light ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-light">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CNavbar;

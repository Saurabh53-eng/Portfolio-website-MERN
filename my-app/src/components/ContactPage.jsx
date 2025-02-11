import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
const ContactPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        My Portfolio
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Header Section */}
            <div className="container text-center py-5">
                <h1>Contact Me</h1>
            </div>

            {/* Contact Form Section */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow p-4">
                            <h4 className="text-center mb-4">Get in Touch</h4>
                            <form>
                                {/* Name Input */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Write your message here"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="container text-center py-5">
                <h4>Or Reach Me At</h4>
                <p className="text-muted">
                    Email: <a href="mailto:yourname@example.com">bandsaurabh61@gmail.com</a>
                </p>
                <p className="text-muted">
                    Phone: <a href="tel:+1234567890">+91 9403090273</a>
                </p>
                <div className="mt-3">
                    <Link
                        to="https://www.linkedin.com/in/saurabh-band-64a477207/"
                        className="btn btn-outline-primary me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        to="https://github.com/Saurabh53-eng"
                        className="btn btn-outline-dark me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;

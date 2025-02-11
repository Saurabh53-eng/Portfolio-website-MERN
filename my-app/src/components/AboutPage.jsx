import React, { useState } from "react";
import { Link } from "react-router"
import "bootstrap/dist/css/bootstrap.min.css";
import myphoto from "../image/MyPhoto.jpg";
const AboutPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div>
            {/* Navigation Bar */}
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

            {/* About Page Content */}
            <div className="container py-5">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h1>About Me</h1>
                    <p className="text-muted">
                        A passionate and enthusiastic fresher ready to start my professional journey.
                    </p>
                </div>

                {/* About Section */}
                <div className="row align-items-center">
                    {/* Image */}
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <img
                            src={myphoto}
                            alt="Profile"
                            className="rounded-circle img-fluid shadow"
                        />
                    </div>

                    {/* Introduction */}
                    <div className="col-md-8">
                        <h2>Hi, I'm Saurabh Marotrao Band!</h2>
                        <p>
                            I graduated with a Bachelor's degree in Computer Applications (BCA) in 2022, with a score of 73% from <strong>RTMNU Kamla Nehru College Sakkardara Nagpur</strong>.
                            I am excited to apply my skills and knowledge to real-world projects.
                        </p>
                        <p>
                            I am currently pursuing my 1st year of MCA at Prerna College, Nagpur.
                        </p>
                        <p>
                            My goal is to contribute to innovative
                            solutions and grow as a professional in the field of <strong>
                                Full stack development or in IT field</strong>.
                        </p>
                        <p>
                            I am a quick learner, detail-oriented, and passionate about building a successful career in the tech industry.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-5">
                    <h3 className="text-center">My Skills</h3>
                    <div className="row text-center mt-4">
                        <div className="col-md-4">
                            <h5>Frontend Development</h5>
                            <p>React, HTML, CSS, JavaScript, Bootstrap,C,C++,JAVA</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Backend Development</h5>
                            <p>Node.js, Express, Python, MongoDB,Spring mvc</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Tools</h5>
                            <p>Github,Vs code,eclipse for java maven projects,netbean for desktop application in Java</p>
                        </div>
                    </div>
                </div>

                {/* Hobbies Section */}
                <div className="mt-5">
                    <h3 className="text-center">Hobbies & Interests</h3>
                    <div className="row text-center mt-4">
                        <div className="col-md-4">
                            <i className="bi bi-camera fs-1"></i>
                            <h5 className="mt-2">Photography</h5>
                            <p>Capturing the beauty of the world through my lens.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-bicycle fs-1"></i>
                            <h5 className="mt-2">Cycling</h5>
                            <p>Exploring new places and staying fit while cycling.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-code-slash fs-1"></i>
                            <h5 className="mt-2">Coding</h5>
                            <p>Creating innovative solutions and learning new technologies.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-5">
                    <h3>Want to know more?</h3>
                    <p>
                        Feel free to <Link to="contact">reach out</Link> or check out my{" "}
                        <Link to="projects">projects</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

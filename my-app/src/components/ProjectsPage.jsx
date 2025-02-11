import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
import INotebook from '../image/INotebook.jpeg';
const ProjectsPage = () => {
        const [isNavOpen, setIsNavOpen] = useState(false);
    const projects = [
        {
            title: "INotebook MERN Stack",
            description:
                "A web application built with React and Bootstrap for managing tasks efficiently.",
            image: { INotebook },
            link: "https://i-notebook-frontend-zeta.vercel.app/Signup",
        },
        {
            title: "Project Two",
            description:
                "A responsive e-commerce platform with a sleek design and dynamic functionality.",
            image: "https://via.placeholder.com/300",
            link: "#",
        },
        {
            title: "Project Three",
            description:
                "An interactive data visualization dashboard using D3.js and Node.js.",
            image: "https://via.placeholder.com/300",
            link: "#",
        },
        {
            title: "Project Four",
            description: "A portfolio website designed for showcasing creative work.",
            image: "https://via.placeholder.com/300",
            link: "#",
        },
    ];

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
                <h1>My Projects</h1>
                <p className="text-muted">
                    Here are some of the projects I've worked on recently.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="container">
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="card shadow-sm h-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <div className="container text-center py-5">
                <p>
                    Want to see more projects? Feel free to <a href="#contact">get in touch</a>!
                </p>
            </div>
        </div>
    );
};

export default ProjectsPage;

import INotebook from '../image/INotebook.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router";
import '../css/HomePage.css';
import { useState } from 'react';
import axios from "axios";

function HomePage() {
    const [modalShow, setModalShow] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const handleImageClick = (imageUrl) => {
        setModalImage(imageUrl);
        setModalShow(true);
    };
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form validation function
    const validateForm = () => {
        const errors = {};

        // Name validation: required
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        // Email validation: required and valid email format
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Message validation: required
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the form
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({}); // Clear errors if form is valid
        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setResponseMessage(''), 2000);
        } catch (error) {
            setResponseMessage("Failed to send your message. Please try again later.");
            console.error("Error sending form data:", error);
            setTimeout(() => setResponseMessage(''), 2000);
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#home">My Portfolio</a>
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
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <header className="bg-dark text-white text-center py-5" id="home">
                <div className="container">
                    <h1 className="display-4">Hello, I'm Saurabh Marotrao Band</h1>
                    <p className="lead">A Passionate Web Developer</p>
                    <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
                </div>
            </header>

            {/* About Section */}
            <section className="py-5" id="about">
                <div className="container">
                    <h2 className="text-center mb-4">About Me</h2>
                    <p className="text-center">
                        I am a MERN Full Stack Website Developer and Java Full stack developer with a passion for building beautiful and functional websites. I enjoy working on challenging projects and learning new technologies.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="bg-light py-5" id="projects">
                <div className="container">
                    <h2 className="text-center mb-4">My Projects</h2>
                    <div className="row">
                        {/* Project 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="image-container">
                                    <img
                                        src={INotebook}
                                        alt="INotebook"
                                        className="card-img-top img-fluid"
                                        onClick={() => handleImageClick(INotebook)}
                                    />
                                    <div className="overlay">
                                        <button
                                            className="btn btn-light"
                                            onClick={() => handleImageClick(INotebook)}
                                        >
                                            View Image
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">INotebook MERN website</h5>
                                    <p className="card-text">Added tokens for login using localstorage, logged user can add multiple notes stored in both frontend and backend, can edit and delete notes.</p>
                                    <Link to="https://i-notebook-frontend-zeta.vercel.app/Signup" target="_blank" className="btn btn-primary">View Project</Link>
                                    <Link id='viewcode' to="https://github.com/Saurabh53-eng/INotebookMERN.git" target="_blank" className="btn btn-primary">View Code</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top img-fluid" alt="Project 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Project 2</h5>
                                    <p className="card-text">Description of the project goes here.</p>
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top img-fluid" alt="Project 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Project 3</h5>
                                    <p className="card-text">Description of the project goes here.</p>
                                    <a href="#" className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-5" id="contact">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Me</h2>
                    {responseMessage && <p className="text-center">{responseMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name='name' value={formData.name}
                                onChange={handleChange} placeholder="Your Name" />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} placeholder="Your Email" />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange} rows="4" placeholder="Your Message"></textarea>
                            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4">
                <p className="mb-0">© 2025 Saurabh M Band. All Rights Reserved.</p>
            </footer>

            {/* Modal for Image Viewing */}
            {modalShow && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="imageModalLabel"
                    aria-hidden="false"
                    style={{ display: "block" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="imageModalLabel">
                                    View Image
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setModalShow(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src={modalImage}
                                    alt="Modal"
                                    className="img-fluid"
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setModalShow(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
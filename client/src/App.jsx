import { useEffect, useState } from "react";
import "./index.css";
function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) {
          throw new Error("Failed to load projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError("Projects could not be loaded.");
      } finally {
        setLoading(false);
      }
    };
     loadProjects();
  }, [API_URL]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message || data.error);
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Could not connect to the server");
    }
  };
  return (
    <div className="container">
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main>
        <section className="hero">
          <p className="small-heading">Welcome to my portfolio</p>
          <h1>Mohammad Tauhid Hossain</h1>
          <p>Computer Science Student | Data Analyst | Web Development Learner</p>
          <a className="primary-button" href="#projects">
            View My Projects
          </a>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a computer science student interested in data analytics,
             machine learning, software development, and building practical
            applications.
          </p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>GitHub</li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          {loading && <p>Loading projects...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    <strong>Technology:</strong> {project.tech.join(", ")}
                  </p>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
               type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>© Mohammad Tauhid Hossain July 2026</p>
      </footer>
    </div>
  );
}
export default App;
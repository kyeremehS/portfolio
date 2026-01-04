import { useEffect, useState } from "react";
import {
  personalInfo,
  socialLinks,
  stints,
  research,
  skills,
  projects,
  blog,
  education,
} from "./data";

const linkStyle = { color: "#1d4ed8", textDecoration: "underline" };

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white text-black transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        fontFamily: '"JetBrains Mono", "Courier New", Courier, monospace',
        fontSize: "14px",
        lineHeight: "1.7",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "60px 40px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "normal",
              marginBottom: "4px",
            }}
          >
            {personalInfo.name}
          </h1>
          <p>{personalInfo.tagline}</p>
        </header>

        {/* Stints Section */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", marginBottom: "16px" }}>Stints:</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            {stints.map((stint, index) => (
              <li key={index} style={{ marginBottom: "6px" }}>
                {stint.role}{" "}
                <a
                  href={stint.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {stint.company}
                </a>
                ; {stint.description}
              </li>
            ))}

            {/* Selected Research as nested list */}
            <li style={{ marginBottom: "6px" }}>
              Selected Research
              <ul
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {research.map((item, index) => (
                  <li key={index} style={{ marginBottom: "6px" }}>
                    {item.title} {item.prefix && item.prefix}
                    {!item.prefix && "with "}
                    <a href={item.url} style={linkStyle}>
                      {item.collaborator}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: "32px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Skills
              <ul
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {skills.map((skill, index) => (
                  <li key={index} style={{ marginBottom: "6px" }}>
                    {skill.category}: {skill.items}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section style={{ marginBottom: "32px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Projects
              <ul
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {projects.map((project, index) => (
                  <li key={index} style={{ marginBottom: "6px" }}>
                    <a href={project.url} style={linkStyle}>
                      {project.name}
                    </a>{" "}
                    - {project.description}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>

        {/* Blog Section */}
        <section style={{ marginBottom: "32px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Blog
              <ul
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                {blog.map((post, index) => (
                  <li key={index} style={{ marginBottom: "6px" }}>
                    <a href={post.url} style={linkStyle}>
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: "32px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              Education
              <div style={{ marginLeft: "24px", marginTop: "6px" }}>
                <a
                  href={education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {education.institution}
                </a>
                <p style={{ marginTop: "2px" }}>{education.degree}</p>
                <p>{education.period}</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Personal Section */}
        <section style={{ marginBottom: "8px" }}>
          <p>{personalInfo.bio}</p>
        </section>

        {/* Current Work */}
        <section style={{ marginBottom: "32px" }}>
          <p>{personalInfo.currentWork}</p>
        </section>

        {/* Footer/Contact */}
        <footer>
          <div style={{ marginBottom: "4px" }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              github
            </a>{" "}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              linkedin
            </a>{" "}
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              twitter
            </a>
          </div>
          <div>
            <a href={`mailto:${personalInfo.email}`} style={linkStyle}>
              {personalInfo.email}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

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
            samuel kyeremeh
          </h1>
          <p>research engineer, ml practitioner, builder</p>
        </header>

        {/* Stints Section */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "16px", marginBottom: "16px" }}>Stints:</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li style={{ marginBottom: "6px" }}>
              research engineer{" "}
              <a
                href="https://giqsama.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1d4ed8", textDecoration: "underline" }}
              >
                @giqsama
              </a>
              ; applied ml research
            </li>
            <li style={{ marginBottom: "6px" }}>
              campus lead{" "}
              <a
                href="https://techstripped.africa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1d4ed8", textDecoration: "underline" }}
              >
                @techstripped africa
              </a>
              ; leading tech education initiatives in ghana
            </li>
            <li style={{ marginBottom: "6px" }}>
              data science trainee{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1d4ed8", textDecoration: "underline" }}
              >
                @ghana tech lab
              </a>
              ; apprenticeship program
            </li>
            <li style={{ marginBottom: "6px" }}>
              data analyst intern{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1d4ed8", textDecoration: "underline" }}
              >
                @noontu technologies
              </a>
              ; data analysis and insights
            </li>
            <li style={{ marginBottom: "6px" }}>
              Selected Research
              <ul
                style={{
                  listStyleType: "circle",
                  paddingLeft: "24px",
                  marginTop: "6px",
                }}
              >
                <li style={{ marginBottom: "6px" }}>
                  Applied machine learning for real-world problem solving with{" "}
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    Dr. Example Name
                  </a>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  Data-driven decision making and analytics, faculty -{" "}
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    Dr. Another Name
                  </a>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  Machine learning model development and deployment -{" "}
                  <a
                    href="mailto:example@university.edu"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    example@university.edu
                  </a>
                </li>
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
                <li style={{ marginBottom: "6px" }}>
                  languages: Python, JavaScript, SQL, R
                </li>
                <li style={{ marginBottom: "6px" }}>
                  ml/ai: PyTorch, TensorFlow, scikit-learn, Hugging Face
                </li>
                <li style={{ marginBottom: "6px" }}>
                  data: Pandas, NumPy, Apache Spark, PostgreSQL
                </li>
                <li style={{ marginBottom: "6px" }}>
                  tools: Git, Docker, AWS, GCP, Linux
                </li>
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
                <li style={{ marginBottom: "6px" }}>
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    project-name
                  </a>{" "}
                  - brief description of the project
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    ml-model
                  </a>{" "}
                  - machine learning model for prediction tasks
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    data-pipeline
                  </a>{" "}
                  - automated data processing pipeline
                </li>
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
                <li style={{ marginBottom: "6px" }}>
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    Introduction to Machine Learning
                  </a>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    Data Engineering Best Practices
                  </a>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <a
                    href="#"
                    style={{ color: "#1d4ed8", textDecoration: "underline" }}
                  >
                    Building Scalable ML Systems
                  </a>
                </li>
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
                  href="https://knust.edu.gh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1d4ed8", textDecoration: "underline" }}
                >
                  Kwame Nkrumah University of Science and Technology
                </a>
                <p style={{ marginTop: "2px" }}>
                  Bachelor of Science - Computer Science
                </p>
                <p>Jan 2022 - Sep 2025, Kumasi</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Personal Section */}
        <section style={{ marginBottom: "8px" }}>
          <p>building products, designing, scaling and learning.</p>
        </section>

        {/* Current Work */}
        <section style={{ marginBottom: "32px" }}>
          <p>stealth</p>
        </section>

        {/* Footer/Contact */}
        <footer>
          <div style={{ marginBottom: "4px" }}>
            <a
              href="https://github.com/samuelkyeremeh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1d4ed8", textDecoration: "underline" }}
            >
              github
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/samuelkyeremeh/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1d4ed8", textDecoration: "underline" }}
            >
              linkedin
            </a>{" "}
            <a
              href="https://twitter.com/samuelkyeremeh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1d4ed8", textDecoration: "underline" }}
            >
              twitter
            </a>
          </div>
          <div>
            <a
              href="mailto:affum3331@gmail.com"
              style={{ color: "#1d4ed8", textDecoration: "underline" }}
            >
              affum3331@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      <header className="header">
        <div className="brand">
          <span className="brand-label">Portfolio</span>
          <h1>Nidhishri Kundar</h1>
        </div>
        <div className="header-links">
          <a href="mailto:nidhishrikundar@gmail.com">nidhishrikundar@gmail.com</a>
          <a href="tel:+917795019950">+91 77950 19950</a>
          <a href="https://www.linkedin.com/in/nidhishri-kundar" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Information Science & Engineering</p>
            <h2>Building modern web and analytics solutions for academic and real-world growth.</h2>
            <p className="intro">
              Aspiring Information Science student with strong foundations in programming, web development, and data analysis.
              Passionate about learning new technologies and contributing to real projects while growing professionally.
            </p>
            <div className="hero-tags">
              <span>Web Development</span>
              <span>Data Analytics</span>
              <span>Machine Learning</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <h3>Profile Snapshot</h3>
              <ul>
                <li><strong>Degree</strong> B.E. in Information Science</li>
                <li><strong>College</strong> NMAM Institute of Technology, Nitte</li>
                <li><strong>CGPA</strong> 7.94</li>
                <li><strong>Graduation</strong> 2027</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span className="section-label">About</span>
            <h3>Professional Summary</h3>
          </div>
          <p>
            Aspiring Information Science and Engineering student with hands-on experience in C, C++, Python, JavaScript, and web technologies.
            Skilled in developing responsive web applications, analyzing data with Python, and applying academic knowledge to practical projects.
          </p>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <span className="section-label">Skills</span>
            <h3>Technical & Professional Strengths</h3>
          </div>
          <div className="skill-grid">
            <div className="skill-card">
              <h4>Programming</h4>
              <p>C, C++, Python, JavaScript, Java</p>
            </div>
            <div className="skill-card">
              <h4>Web</h4>
              <p>HTML5, CSS3, React.js, responsive design</p>
            </div>
            <div className="skill-card">
              <h4>Data</h4>
              <p>SQL, MySQL, Pandas, Tableau, MATLAB</p>
            </div>
            <div className="skill-card">
              <h4>Tools</h4>
              <p>VS Code, Jupyter Notebook, Git, Tableau</p>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span className="section-label">Projects</span>
            <h3>Selected Work</h3>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h4>Arecanut Grading</h4>
              <p>
                Collected and analyzed arecanut data including size, color, moisture, and defects.
                Built a standardized grading dataset using Excel, Python (Pandas), and field measurements.
              </p>
            </article>
            <article className="project-card">
              <h4>E-commerce Management System</h4>
              <p>
                Built a full-stack e-commerce application with product browsing, cart management, orders, and inventory tracking.
                Used HTML, CSS, JavaScript, SQL Server, and SQL triggers to manage data workflows.
              </p>
            </article>
            <article className="project-card">
              <h4>Student Performance Analysis</h4>
              <p>
                Analyzed student performance data and predicted outcomes with Python, Seaborn, and scikit-learn.
                Applied statistical and machine learning techniques to identify trends and insights.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <span className="section-label">Education</span>
            <h3>Academic History</h3>
          </div>
          <div className="education-list">
            <div>
              <h4>NMAM Institute of Technology, Nitte</h4>
              <p>Bachelor of Engineering in Information Science • 2027</p>
            </div>
            <div>
              <h4>Viveka PU College, Kota</h4>
              <p>Pre-University Course (PUC) • 2023</p>
            </div>
            <div>
              <h4>Viveka English Medium School, Kota</h4>
              <p>High School (SSLC) • 2021</p>
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="section-heading">
            <span className="section-label">Achievements</span>
            <h3>Certifications and Milestones</h3>
          </div>
          <div className="achievement-grid">
            <div className="achievement-card">
              <p>TypeScript Programming for Web Development — Infosys Springboard</p>
            </div>
            <div className="achievement-card">
              <p>Software Engineering Fundamentals – SDLC & Testing — Infosys Springboard</p>
            </div>
            <div className="achievement-card">
              <p>Microsoft AI Learning Challenge Certification — Innovation 2025</p>
            </div>
            <div className="achievement-card">
              <p>Microsoft Azure Learning Challenge Certification — Innovation 2025</p>
            </div>
            <div className="achievement-card">
              <p>Microsoft Applied AI Challenge Certification — Innovation 2025</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <span className="section-label">Contact</span>
            <h3>Let’s collaborate</h3>
          </div>
          <p>
            I’m available for internships and project collaborations. Reach out by email or LinkedIn to discuss how I can support your next development or analytics initiative.
          </p>
          <a className="contact-button" href="mailto:nidhishrikundar@gmail.com">
            Email Me
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Designed with React, Vite, and a focus on modern portfolio presentation.</p>
      </footer>
    </div>
  )
}

export default App

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science Engineering</h4>
                <h5>Vellore Institute of Technology</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              CGPA 8.34/10. Final-year CSE student specializing in Python, backend systems, REST APIs, machine learning, and platform engineering. Class XII CBSE (82.2%) & Class X State Board (100%).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4><b>Data Analyst Intern</b></h4>
                <h5><b>Siemens, Goa</b></h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Managed multi-system data workflows for an industrial monitoring program integrating PLCs, edge devices, SAP ERP, and AWS. Automated workflows using n8n. Designed Grafana and Power BI dashboards. Recognized as Best-Performing Intern.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Training</h4>
                <h5>Oracle OCI & EY Azure</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Oracle OCI 2025 Generative AI Professional • Oracle OCI 2025 Data Science Professional • EY Microsoft Azure Fundamentals (AZ-900) • Data Analytics using Power BI (Dashboarding & KPI Tracking).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Leadership & Achievements</h4>
                <h5>VIT & Community Initiatives</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              House Captain leading 20-member council for 1,000+ students. Two-time College Gold Medalist & Sultan Chand Deepak Devi Memorial Award winner (20+ debate/declamation wins). Coordinated HelpAge India campaign & blood donor drive.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;

import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="landingPageWrapper">

    
      <div className="row align-items-center">

        <div className="text-center">
          <h1 className="hero-title  ">
           Gestion de Tickets Support
          </h1>
          <p className="lead">
            Une application web moderne dédiée à la gestion des tickets de support,<br></br>
            permettant le suivi, la priorisation et l’analyse des demandes clients.
          </p>
          <Link to="/dashboard">
          <button className="btnL">Accéder a l'application</button>
          </Link>
        </div>

      </div>

     
      <section className="team-pro">
        <h2>Équipe du projet</h2>

        <div className="team-grid">
          <div className="team-card">
            <h5>Soukaina Aferdi</h5>
          </div>

          <div className="team-card">
            <h5>Abkour Douaa</h5>
          </div>

         
        </div>
      </section>

      
      <footer className="footer-pro">
        <div className="footer-content">

          <div>
            <h6>DigiServices</h6>
            <p>Entreprise IT – Casablanca</p>
          </div>

          <div>
            <h6>Contact</h6>
            <p>Email : support@digiservices.ma</p>
            <p>Tél : +212 6 00 00 00 00</p>
          </div>

          <div>
            <h6>Suivez-nous</h6>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

        </div>

      </footer>
        <div className="footer-bottom">
          © 2025 DigiServices – Projet Gestion de Tickets
        </div>

    </div>
  );
};

export default LandingPage;

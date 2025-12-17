import { Link } from "react-router-dom";
import "./style.css"

const LandingPage = () => {
  return (
      <div className="landingPageWrapper">
  <div className="row align-items-center ">

    <div className="col-md-6 text-center">
      <img 
        src="/Sécrétaire___Loup_party__-removebg-preview.png" 
        alt="Support Team" 
        className="img-fluid rounded img" 
      />
    </div>

    <div className="col-md-6 text-start">
      <h1 className="hero-title">
        <span>Gestion de</span>
        <span>Tickets Support</span>
      </h1>
      <p className="lead">
        DigiServices, une entreprise IT de Casablanca avec 200 employés,<br/> 
        reçoit quotidiennement des demandes d'assistance...
      </p>
      <Link to="/dashboard" >
        <button class=" btn1 btn btn-light btn-dashboard mt-3">Accéder à l'application</button>
      </Link>
    </div>

  </div>

  <footer className="footer  text-white text-center py-3">
      &copy; 2025 DigiServices - Projet Gestion de Tickets
    </footer>
  </div>


  );
}

export default LandingPage;


     


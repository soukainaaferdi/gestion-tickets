import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Bienvenue chez DigiServices</h1>
     
      <div className="mt-5">
        <Link to="/dashboard" className="btn btn-primary m-2">Dashboard</Link>
        <Link to="/tickets" className="btn btn-success m-2">Liste des Tickets</Link>
        <Link to="/tickets/ajouter" className="btn btn-warning m-2">Ajouter un Ticket</Link>
      </div>
    </div>
  );
}

export default LandingPage;
/*
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Tickets ouverts</h4>
            <p>...</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Tickets en retard</h4>
            <p>...</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Temps moyen de résolution</h4>
            <p>...</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Taux de résolution</h4>
            <p>...</p>
          </div>
        </div>
      </div>
      */
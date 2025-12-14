import { Link } from "react-router-dom";
import "./style.css"

const LandingPage = () => {
  return (
  <div class="container mt-5">

    <div class="hero">
      <h1>Gestion de Tickets Support</h1>
      <p>DigiServices, une entreprise IT de Casablanca avec 200 employés, reçoit quotidiennement des demandes d'assistance. Mme Amina a besoin d'un système centralisé pour gérer les tickets et mesurer les temps de résolution.</p>
      <div className="mt-5">
        <Link to="/dashboard" className="btn btn-light m-2">Dashboard</Link>
        <Link to="/tickets" className="btn btn-success m-2">Liste des Tickets</Link>
        <Link to="/tickets/ajouter" className="btn btn-warning m-2">Ajouter un Ticket</Link>
      </div>
    </div>

    <div class="features mb-5">
      <h2 class="section-title">Fonctionnalités principales</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Créer/modifier/supprimer un ticket</li>
        <li class="list-group-item">Champs : titre, description, catégorie, priorité, statut, nom client, email</li>
        <li class="list-group-item">Catégories : Technique, Matériel, Compte, Facturation</li>
        <li class="list-group-item">Priorités : Basse, Moyenne, Haute, Urgente</li>
        <li class="list-group-item">Statuts : Nouveau, En cours, Résolu, Fermé</li>
        <li class="list-group-item">Suivi automatique : temps écoulé, badge rouge (>48h), date de résolution</li>
        <li class="list-group-item">Statistiques : tickets ouverts, tickets en retard, temps moyen, taux de résolution</li>
      </ul>
    </div>

    <div class="team mb-5">
      <h2 class="section-title">Membres de l'équipe</h2>
      <div class="row justify-content-center">
        <div class="col-md-3 mb-4">
          <div class="card text-center p-3">
            <div class="card-body">
              <h5 class="card-title">Soukaina Aferdi</h5>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card text-center p-3">
            <div class="card-body">
              <h5 class="card-title">Douaa Abkour</h5>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      &copy; 2025 DigiServices - Projet Gestion de Tickets
    </footer>
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
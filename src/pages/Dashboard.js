import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tickets")
      .then(res => setTickets(res.data))
      .catch(console.error);
  }, []);

  // 🟦 Tickets ouverts
  const openTickets = tickets.filter(
    t => t.statut === "Nouveau" || t.statut === "En cours"
  );

  // 🔴 Tickets en retard (>48h)
  const lateTickets = tickets.filter(t => {
    if (t.statut === "Résolu" || t.statut === "Fermé") return false;
    const diff = Date.now() - new Date(t.dateCreation).getTime();
    return diff > 48 * 60 * 60 * 1000;
  });

  // 🟩 Temps moyen de résolution
  const resolvedTickets = tickets.filter(t => t.dateResolution);
  const avgResolutionTime =
    resolvedTickets.length > 0
      ? Math.round(
          resolvedTickets.reduce((sum, t) => {
            return (
              sum +
              (new Date(t.dateResolution) - new Date(t.dateCreation)) /
                (1000 * 60 * 60)
            );
          }, 0) / resolvedTickets.length
        )
      : 0;

  // 🔵 Taux de résolution
  const resolutionRate =
    tickets.length > 0
      ? Math.round((resolvedTickets.length / tickets.length) * 100)
      : 0;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h2 className="mb-4">Dashboard</h2>
        <Link to="/">
        <button className="btn btn-warning mb-3">Retour</button>
        </Link>
      </div>

      <div className="row text-center">
        <div className="col-md-3 mb-3">
          <div className="card p-3 shadow">
            <h5>Tickets ouverts</h5>
            <h2>{openTickets.length}</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 shadow border-danger">
            <h5>Tickets en retard</h5>
            <h2 className="text-danger">{lateTickets.length}</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 shadow">
            <h5>Temps moyen</h5>
            <h2>{avgResolutionTime} h</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card p-3 shadow">
            <h5>Taux résolution</h5>
            <h2>{resolutionRate}%</h2>
          </div>
        </div>
      </div>

      {/* Derniers tickets */}
      <div className="mt-5">
        <h4>Derniers tickets</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Statut</th>
              <th>Priorité</th>
              <th>Date création</th>
            </tr>
          </thead>
          <tbody>
            {tickets.slice(-5).map(t => (
              <tr key={t.id}>
                <td>{t.titre}</td>
                <td>{t.statut}</td>
                <td>{t.priorite}</td>
                <td>
                  {new Date(t.dateCreation).toLocaleDateString("fr-FR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
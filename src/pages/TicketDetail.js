import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TicketItem from "../components/TicketItem";
import { fetchTicketById } from "../redux/ticketsSlice";
import { calculateHours } from "../utils/timeUtils";
import "./style.css";

const TicketDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ticket = useSelector(state => state.tickets.currentTicket);

  useEffect(() => {
    dispatch(fetchTicketById(id));
  }, [dispatch, id]);

  if (!ticket) return null;

  const hours = calculateHours(ticket.dateCreation);
  const isLate = hours >= 48 && ticket.statut !== "Résolu" && ticket.statut !== "Fermé";

  return (
    <div className="d-flex justify-content-center align-items-start mt-4">
      <div className="card1 card shadow-lg">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Détails du ticket</h5>
          <div className="d-flex gap-2">
            <Link to={`/tickets/modifier/${ticket.id}`}>
              <button className="btn btn-warning btn-sm">Modifier</button>
            </Link>
          </div>
        </div>

        <div className="card-body">
          <h4 className="text-center mb-4">{ticket.titre}</h4>
          <div className="row">
            <div className="col-md-6">
              <p><strong>Nom :</strong> {ticket.nomClient}</p>
              <p><strong>Email :</strong> {ticket.email}</p>
              <p><strong>Catégorie :</strong> {ticket.categorie}</p>
              <p>
                <strong>Priorité :</strong>
                <span className="badge bg-info ms-2">{ticket.priorite}</span>
              </p>
            </div>

            <div className="col-md-6">
              <p>
                <strong>Statut :</strong>
                <span className={`badge ms-2 ${
                  ticket.statut === "Résolu" ? "bg-success" :
                  ticket.statut === "En cours" ? "bg-warning" : "bg-secondary"
                }`}>{ticket.statut}</span>
              </p>
              <p><strong>Date de création :</strong><br />{new Date(ticket.dateCreation).toLocaleString("fr-FR")}</p>
              <p><strong>Date de résolution :</strong><br />
                {ticket.dateResolution ? (
                  new Date(ticket.dateResolution).toLocaleString("fr-FR")
                ) : (
                  <span className="text-danger">Non résolu</span>
                )}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3 p-3 bg-light rounded">
            <div><strong>Temps écoulé :</strong> <span className="badge bg-dark ms-2">{hours} h</span></div>
            <div>{isLate ? <span className="badge bg-danger">En retard</span> : <span className="badge bg-success">OK</span>}</div>
          </div>

          <div className="mt-4 p-3 border rounded">
            <h6>Description</h6>
            <p className="mb-0">{ticket.description}</p>
          </div>

          <hr />
          <TicketItem ticket={ticket} />
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;

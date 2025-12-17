import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TicketItem from "../components/TicketItem";
import { fetchTicketById } from "../redux/ticketsSlice";
import { calculateHours } from "../utils/timeUtils";

const TicketDetail = () => {
  const { id } = useParams();
  const ticket = useSelector(state => state.tickets.currentTicket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTicketById(id));
  }, [dispatch, id]);

  if (!ticket) return null;

  const hours = calculateHours(ticket.dateCreation);
  const isLate = hours >= 48 && ticket.statut !== "Résolu" && ticket.statut !== "Fermé";

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row">
        <TicketItem ticket={ticket} />
        <div className="card p-2 mt-3 shadow-lg">
          <h2 className="card-title text-center">{ticket.titre}</h2>
          <div className="card-body">
            <p>{ticket.description}</p>
            <p><strong>Nom :</strong> {ticket.nomClient}</p>
            <p><strong>Email :</strong> {ticket.email}</p>
            <p><strong>Catégorie :</strong> {ticket.categorie}</p>
            <p><strong>Priorité :</strong> {ticket.priorite}</p>
            <p><strong>Statut :</strong> {ticket.statut}</p>
            <p><strong>Date de création :</strong> {new Date(ticket.dateCreation).toLocaleString("fr-FR")}</p>
            <p><strong>Temps écoulé :</strong> {hours}h {isLate && <span className="text-danger"> En retard</span>}</p>
            <p><strong>Date de résolution :</strong> {ticket.dateResolution ? new Date(ticket.dateResolution).toLocaleString("fr-FR") : "Non résolu"}</p>
            <Link to="/tickets"><button className="btn btn-warning">Retour</button></Link>
            <Link to={`/tickets/modifier/${ticket.id}`}><button className="btn btn-primary mx-2">Modifier</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;

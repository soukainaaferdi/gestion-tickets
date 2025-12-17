import { useDispatch } from "react-redux";
import { editTicket } from "../redux/ticketsSlice";
import { calculateHours } from "../utils/timeUtils";

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch();
  const hours = calculateHours(ticket.dateCreation);
  const isLate = hours >= 48 && ticket.statut !== "Résolu";

  const handleResolve = () => {
    const updatedTicket = {
      ...ticket,
      statut: "Résolu",
      dateResolution: new Date().toISOString()
    };
    dispatch(editTicket(ticket.id, updatedTicket));
  };

  return (
    <div className="card p-3 mb-3 shadow-sm">
      <strong className={`badge ${isLate ? "bg-danger" : "bg-secondary"} fs-6`}>
        {isLate ? "En retard (48h+)" : `${hours}h`}
      </strong>
      {ticket.statut !== "Résolu" && (
        <button className="btn btn-success btn-sm mt-2" onClick={handleResolve}>
          Marquer résolu
        </button>
      )}
    </div>
  );
};

export default TicketItem;

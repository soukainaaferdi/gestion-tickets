import { calculateHours } from "../utils/timeUtils";
import { useDispatch } from "react-redux";
import { resolveTicket } from "../redux/ticketsSlice";

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch();
  const hours = calculateHours(ticket.dateCreation);
  const isLate = hours >= 48 && ticket.statut !== "résolu";


  const handleResolve = () => {
    dispatch(resolveTicket(ticket));
  };

  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h5 className="card-title text-center">{ticket.titre}</h5>

     
      <span className={`badge ${isLate ? "bg-danger" : "bg-secondary"} fs-6`}>
        {isLate ? "En retard (48h+)" : `${hours}h`}
      </span>

     
      <button 
        className="btn btn-success btn-sm mt-2"
        onClick={handleResolve}
      >
        Marquer résolu
      </button>
    </div>
  );
};

export default TicketItem;

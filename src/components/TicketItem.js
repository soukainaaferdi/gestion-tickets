
import { calculateHours } from "../utils/timeUtils";
import { useDispatch } from "react-redux";
import {resolveTicket}from"../redux/ticketsSlice";

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch();
  const hours = calculateHours(ticket.dateCreation);
  const isLate = hours >= 48 && ticket.statu !== "résolu";


  const handleResolve = () => {
    dispatch(resolveTicket(ticket));
  };

  return (
    <div className="card p-3 mb-2 shadow-sm">
      <h5>{ticket.title}</h5>

      <button className={`btn text-white ${isLate ? "bg-danger" : "bg-secondary"}`}>
        {isLate ? "En retard (48h+)" : `${hours}h`}
      </button>

      <button className="btn btn-success mt-2" onClick={handleResolve}>
        Marquer résolu
      </button>
    </div>
  );
};

export default TicketItem;

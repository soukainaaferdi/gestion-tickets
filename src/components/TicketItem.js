import "../pages/style.css"
import { calculateHours } from "../utils/timeUtils";
import { useDispatch } from "react-redux";
import { editTicket } from "../redux/ticketsSlice";

const TicketItem = ({ ticket }) => {
  const dispatch = useDispatch();
  const hours = calculateHours(ticket.dateCreation);
  const isLate = hours >= 48 && ticket.statut !== "Résolu";

  const handleResolve = () => {
    const updatedTicket = {
      ...ticket,  statut: "Résolu", dateResolution: new Date().toISOString()
    };
    dispatch(editTicket(ticket.id, updatedTicket));
  };

  return (

    <div className=" p-2 ">
      {ticket.statut !== "Résolu" && (
        <button 
          className="btn2 btn btn-success  resolu" onClick={handleResolve}>
          Marquer résolu
        </button>
      )}

     <div className="retard ">
      <strong className={`alert role="alert" ${isLate ? "alert-danger" :"" } fs-6 d-block  text-center`} >
        {isLate ? "En retard (48h+)" : ``}
        
      </strong>
     </div>
     <div>
     </div>
     


    </div>
  );
};

export default TicketItem;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTickets, supprimerTicket } from "../redux/ticketsSlice";

const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);

  const [visible, setVisible] = useState(7)

  const handleVisible=()=>{
    setVisible((t) => t + 7)
  }

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link to="/tickets/ajouter"><button className="btn btn-success m-3">Ajouter +</button></Link>
        <Link to="/"><button className="btn btn-warning my-3">Retour</button></Link>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <table className="table">
          <thead>
            <tr>
              <th>Nom client</th>
              <th>Email</th>
              <th>Titre</th>
              <th>Catégorie</th>
              <th>Priorité</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.slice(0, visible).map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.nomClient}</td>
                <td>{ticket.email}</td>
                <td>{ticket.titre}</td>
                <td>{ticket.categorie}</td>
                <td>{ticket.priorite}</td>
                <td>{ticket.statut}</td>
                <td>
                  <div className="d-flex">
                    <Link to={`/tickets/${ticket.id}`}><button className="btn btn-primary mx-3">Voir</button></Link>
                    <button className="btn btn-danger" onClick={() => {
                        const ok = window.confirm("Voulez-vous vraiment supprimer ce ticket ?");
                        if(ok){
                            dispatch(supprimerTicket(ticket.id))}
                        }}>Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
        {visible < tickets.length && (
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary" onClick={handleVisible}>
            Voir plus
          </button>
        </div>
        )}
    </div>
  );
};

export default TicketsList;

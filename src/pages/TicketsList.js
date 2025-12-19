
import axios from "axios";
import "../pages/style.css"
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
 <div className="container py-4 ">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-dark" type="submit">
        Search
      </button>
    </form>


    <div>
      <Link to="/tickets/ajouter">
        <button className="btn btn-success mx-2">Ajouter +</button>
      </Link>
    </div>
  </div>

  <div className="table-wrapper d-flex justify-content-center">
    <table className="table table-hover custom-table">
      <thead className="table-light">
        <tr>
          <th>Nom client</th>
          <th>Email</th>
          <th>Titre</th>
          <th>Catégorie</th>
          <th>Priorité</th>
          <th className="text-center">Statut</th>
          <th className="text-center">Action</th>
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
                <Link to={`/tickets/${ticket.id}`}>
                  <button className="btn btn-primary mx-2">Voir</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (window.confirm("Voulez-vous vraiment supprimer ce ticket ?")) {
                      dispatch(supprimerTicket(ticket.id));
                    }
                  }}
                >
                  Supprimer
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


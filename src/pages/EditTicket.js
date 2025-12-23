import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTicketById, editTicket } from "../redux/ticketsSlice";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ticketFromStore = useSelector(state => state.tickets.currentTicket);
  const [ticket, setTicket] = useState(ticketFromStore || {
    nomClient: "",
    email: "",
    titre: "",
    description: "",
    categorie: "",
    priorite: "",
    statut: "Nouveau",
    dateCreation: new Date().toISOString(),
    dateResolution: null
  });

  useEffect(() => {
    dispatch(fetchTicketById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (ticketFromStore) {
      setTicket(ticketFromStore)
    };
  }, [ticketFromStore]);

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticket.statut === "Résolu" && !ticket.dateResolution) {
      ticket.dateResolution = new Date().toISOString();
    }
    dispatch(editTicket(id, ticket));
    navigate(`/tickets/${id}`);
  };

  return (
    <div className="container">
      <h1 className="m-3 mb-4">Modifier le ticket</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" name="nomClient" className="form-control m-2" onChange={handleChange} value={ticket.nomClient}/>
        <input type="email" placeholder="Email" name="email" className="form-control m-2" onChange={handleChange} value={ticket.email}/>
        <input type="text" placeholder="Title" name="titre" className="form-control m-2" onChange={handleChange} value={ticket.titre}/>
        <textarea placeholder="Description" name="description" className="form-control m-2" onChange={handleChange} value={ticket.description}/>
        <select name="categorie" className="form-control m-2" onChange={handleChange} value={ticket.categorie}>
          <option value="">Catégorie</option>
          <option>Technique</option>
          <option>Matériel</option>
          <option>Compte</option>
          <option>Facturation</option>
        </select>
        <select name="priorite" className="form-control m-2" onChange={handleChange} value={ticket.priorite}>
          <option value="">Priorité</option>
          <option>Basse</option>
          <option>Moyenne</option>
          <option>Haute</option>
          <option>Urgente</option>
        </select>
        <select name="statut" className="form-control m-2" onChange={handleChange} value={ticket.statut}>
          <option value="">Statut</option>
          <option>Nouveau</option>
          <option>En cours</option>
          <option>Résolu</option>
          <option>Fermé</option>
        </select>
        <button type="submit" className="btn btn-success m-3">Edit</button>
      </form>
    </div>
  );
};

export default EditTicket;


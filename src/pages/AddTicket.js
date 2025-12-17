import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTicket } from "../redux/ticketsSlice";

const AddTicket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState({
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

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticket.titre || !ticket.description || !ticket.categorie || !ticket.priorite) {
      alert("Entrer tous les champs");
      return;
    }
    dispatch(addTicket(ticket));
    navigate("/tickets");
  };

  return (
    <div className="container">
      <h1 className="m-3">Ajouter un nouveau ticket</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" name="nomClient" className="form-control m-2" onChange={handleChange}/>
        <input type="email" placeholder="Email" name="email" className="form-control m-2" onChange={handleChange}/>
        <input type="text" placeholder="Title" name="titre" className="form-control m-2" onChange={handleChange}/>
        <textarea placeholder="Description" name="description" className="form-control m-2" onChange={handleChange}/>
        <select name="categorie" className="form-control m-2" onChange={handleChange}>
          <option value="">Catégorie</option>
          <option>Technique</option>
          <option>Matériel</option>
          <option>Compte</option>
          <option>Facturation</option>
        </select>
        <select name="priorite" className="form-control m-2" onChange={handleChange}>
          <option value="">Priorité</option>
          <option>Basse</option>
          <option>Moyenne</option>
          <option>Haute</option>
          <option>Urgente</option>
        </select>
        <button type="submit" className="btn btn-primary m-2">Create</button>
      </form>
    </div>
  );
};

export default AddTicket;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TicketItem from "../components/TicketItem";
import { calculateHours } from "../utils/timeUtils"
const TicketDetail = () => {
     const {id}= useParams()
     const [ticket, setTicket] = useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:5000/tickets/${id}`)
        .then(res => setTicket(res.data))
        .catch(console.error)
    }, [id])
    if(!ticket){return null}

     const hours = calculateHours(ticket.dateCreation);
     const isLate = hours >= 48 && ticket.statut !== "Résolu" && ticket.statut !== "Fermé";
    return (             
        <div className="d-flex justify-content-center align-items-center ">
            <div className="row">
                <TicketItem ticket={ticket} setTicket={setTicket} />

                <div className="card p-2 mt-3 shadow-lg">
                    <h2 className="card-title  text-center">{ticket.titre}</h2>
                    <div className="card-body">
                        <p className="card-text">{ticket.description}</p>
                        <p><strong>Nom :</strong> {ticket.nomClient}</p>
                        <p><strong>Email :</strong> {ticket.email}</p>
                        <p><strong>Catégorie :</strong> {ticket.categorie}</p>
                        <p><strong>Priorite :</strong> {ticket.priorite}</p>
                        <p><strong>Statut :</strong> {ticket.statut}</p>                
                        <p><strong>Date de creation :</strong> {new Date(ticket.dateCreation).toLocaleString("fr-FR")}</p>
                    <p><strong>Temps écoulé depuis creation :</strong><span className="badge bg-info text-dark">{hours} H</span> </p>
                      <p><strong>Date de résolution :</strong> {ticket.dateResolution ? new Date(ticket.dateResolution).toLocaleString("fr-FR") : "Non résolu"}</p>
                        <p><strong>Badge retard : </strong>{isLate ? <span className="text-danger">"En retard "</span>: "OK "}</p>
                        <Link to="/tickets">
                            <button className="btn btn-warning">Retour</button>
                        </Link>
                        <Link to={`/tickets/modifier/${ticket.id}`}>
                            <button className="btn btn-primary mx-2">Modifier</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default TicketDetail;

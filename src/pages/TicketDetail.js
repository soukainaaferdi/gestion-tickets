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
;

    
    return (             
        <div className="d-flex justify-content-center align-items-center ">
            <div className="row">
                <TicketItem ticket={ticket} />
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
                        <p><strong>Date de résolution :</strong> {ticket.dateResolution || "Non résolu"}</p>
                        <p><strong>Badge retard : </strong>{isLate ? <strong className="text-danger">En retard </strong>: "OK "}</p>
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


/*
import { useParams } from "react-router-dom";

const TicketDetail = () => {
    const {id}= useParams()
    const ticket = tickets.find(ticket => ticket.id == id)
    return ( 
        <div>
            <div className="row" key={ticket.id}>
            <div className="card p-2 col-3 m-2">
                <h2 className="card-title">{ticket.titre}</h2>
                <p className="card-text">{ticket.description}</p>
                <p>{ticket.categorie}</p>
                <p>{ticket.priorite}</p>
                <p>{ticket.statut}</p>
                <strong>{ticket.nomClient}</strong>
                <p>{ticket.email}</p>
                <div>Date creation : {ticket.dateCreation}</div>
                <div>Temps ecoulé : {ticket.dateResolution}</div>
                <p>Retard : X ticket en retard</p>
                <p>Date résolution : </p>
                <div>
                    <Link to="/detail">
                    <button className="btn btn-primary mx-2">Détail</button>
                    </Link>
                    <Link to={/update/${ticket.id}}>
                    <button className="btn btn-secondary">Modifier</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default TicketDetail;
*/
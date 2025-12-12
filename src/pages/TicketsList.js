import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TicketsList = () => {
    const [tickets, setTickets] = useState([])
        useEffect(
        ()=>{ axios.get('http://localhost:4000/tickets')
       .then(reponse=>{
           setTickets(reponse.data)
       })
        .catch(console.error)
        },[])


    return ( 
        <div className="container">
            <div className="d-flex justify-content-" >
                <Link to="/tickets/ajouter">
                   <button className="btn btn-primary m-3">Create Ticket</button>
                </Link>
                <Link to="/">
                   <button className="btn btn-warning m-3">Back</button>
                </Link>
            </div>

            {tickets.map((ticket)=>(
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
                    <Link to="/update">
                    <button className="btn btn-secondary">Modifier</button>
                    </Link>
                </div>
            </div>
            </div>
            ))}
        </div>
     );
}
 
export default TicketsList;
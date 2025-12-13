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
                    <Link to={`/update/${ticket.id}`}>
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
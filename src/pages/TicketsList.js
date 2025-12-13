import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TicketsList = () => {
    
    const [tickets, setTickets] = useState([])
        useEffect(
        ()=>{ axios.get('http://localhost:5000/tickets')
       .then(reponse=>{
           setTickets(reponse.data)
       })
        .catch(console.error)
        },[])

        const deleteTicket =(id)=>{
            axios.delete(`http://localhost:5000/tickets/${id}`)
            .then(()=>{
                setTickets(prev =>
                    prev.filter(t => t.id !== id))
                
            })
            .catch(console.error)
        }
       

    return ( 
    <div className="mt-2">
        <div className="d-flex justify-content-center">
            <Link to="/tickets/ajouter">
            <button className="btn btn-success">Add +</button>
            </Link>
        </div>
            <div className=" d-flex justify-content-center align-item-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>nom client</th>
                            <th>email</th>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Catégorie</th>
                            <th>Priorité</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {tickets.map(ticket => (
                    <tbody>
                        <tr>
                            <td>{ticket.nomClient}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.titre}</td>
                            <td>{ticket.description}</td>
                            <td>{ticket.categorie}</td>
                            <td>{ticket.priorite}</td>
                            <td>{ticket.statut}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                <Link to="/detail">
                                    <button className="btn btn-primary">Détail</button>
                                </Link>
                                <Link to={`/modifier/${ticket.id}`}>
                                    <button className="btn btn-secondary mx-2">Modifier</button>
                                </Link>
                                    <button className="btn btn-danger" onClick={()=>deleteTicket(ticket.id)}>Supprimer</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                    ))}
                </table>
            </div>
        </div>
     );
}
 
export default TicketsList;


/*
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
                
            <div className="card p-2 col-4 m-2">
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
                <div className="d-flex">
                    <Link to="/detail">
                    <button className="btn btn-primary">Détail</button>
                    </Link>
                    <Link to={`/update/${ticket.id}`}>
                    <button className="btn btn-secondary mx-2">Modifier</button>
                    </Link>
                    <button className="btn btn-danger" onClick={()=>deleteTicket(ticket.id)}>Supprimer</button>
                </div>
            </div>
            </div>
            ))}
        </div>
*/
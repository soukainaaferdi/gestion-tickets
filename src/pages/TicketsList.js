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
    <div className=" ">
        <div className="d-flex justify-content-center">
            <Link to="/tickets/ajouter">
            <button className="btn btn-success m-3">Ajouter +</button>
            </Link>
        </div>
            <div className=" d-flex justify-content-center align-item-center">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>nom client</th>
                            <th>email</th>
                            <th>Titre</th>
                            <th>Catégorie</th>
                            <th>Priorité</th>
                            <th>Statut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tickets.map(ticket => (
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
                                    <button className="btn btn-primary mx-3">Voir</button>
                                </Link>
                                    <button className="btn btn-danger" onClick={()=>deleteTicket(ticket.id)}>Supprimer</button>
                                </div>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default TicketsList;

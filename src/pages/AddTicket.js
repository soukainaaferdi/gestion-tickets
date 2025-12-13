import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddTicket = () => {
     const navigate = useNavigate()
    const [ticket, setTicket] = useState({
        nomClient:"",
        email:"",
        titre:"",
        description:"",
        categorie:"",
        priorite:"",
        statut:"Nouveau",
        dateCreation : new Date().toISOString() ,
        dateResolution: null
    })
    const handleChange=(e)=>{
        setTicket({
            ...ticket, [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if (!ticket.titre || !ticket.description || !ticket.categorie || !ticket.priorite){
            alert("Entrer tous les champs")
            return
        }

        axios.post('http://localhost:5000/tickets', ticket)
        .then(()=>{
            navigate("/tickets")
        })
        .catch(console.error)
    }
    return (  
        <div className="container">
            <h1 className="m-3">Ajouter un nouveau ticket</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" className="form-control m-2" name="nomClient" onChange={handleChange}/>
            <input type="email" placeholder="Email" className="form-control m-2" name="email" onChange={handleChange}/>
            <input type="text" placeholder="Title" className="form-control m-2" name="titre" onChange={handleChange}/>
            <textarea placeholder="Description" className="form-control m-2" name="description" onChange={handleChange}/>

            <select className="form-control m-2" name="categorie" onChange={handleChange}>
                <option value="">catégorie</option>
                <option>Technique</option>
                <option>Matériel</option>
                <option>Compte</option>
                <option>Facturation</option>
            </select>

            <select className="form-control m-2" name="priorite" onChange={handleChange}>
                <option value="">Priorités</option>
                <option>Basse</option>
                <option>Moyenne</option>
                <option>Haute</option>
                <option>Urgente</option>
            </select>

            <button className="btn btn-primary m-2" type="submit">Create</button>
            <Link to="/tickets">
                <button className="btn btn-warning" type="button">Retour</button>
            </Link>

            </form>
        </div>

    );
}
 
export default AddTicket;
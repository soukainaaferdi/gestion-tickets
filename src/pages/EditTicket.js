import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditTicket = () => {
    const {id} = useParams()
     const navigate = useNavigate()
    const [ticket, setTicket] = useState({
        nomClient:"",
        email:"",
        titre:"",
        description:"",
        categorie:"",
        priorite:"",
        statut:"Nouveau",
        dateCreation : new Date().toLocaleString("fr-FR") ,
        dateResolution: null
    })
    const handleChange=(e)=>{
        setTicket({
            ...ticket, [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/tickets/${id}`)
        .then(res =>
             setTicket(res.data)
        )
        .catch(console.error)
    },[id])
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.put(`http://localhost:5000/tickets/${id}`, ticket)
        .then(()=>{
            navigate("/tickets")
        })
        .catch(console.error)
    }
    return (  
        <div className="container">
            <h1 className="m-3 mb-4">Ajouter un nouveau ticket</h1>
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

            <select className="form-control m-2" name="statut" onChange={handleChange}>
                <option value="">Statuts</option>
                <option>Nouveau</option>
                <option>En cours</option>
                <option>Résolu</option>
                <option>Fermé</option>
            </select>

            <button className="btn btn-success m-3" type="submit">Edit</button>
        </form>
        </div>
    );
}
export default EditTicket;

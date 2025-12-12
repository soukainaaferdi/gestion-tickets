import { Link } from "react-router-dom";
const AddTicket = () => {
    return (  
        <div>
        <div className="container">
            <h2 className="m-3">Ajouter Un Ticket</h2>
            <input type="text" placeholder="Title" className="form-control m-2"/>
            <textarea placeholder="Description" className="form-control m-2"/>
            <select className="form-control m-2">
                <option>catégorie</option>
                <option>Technique</option>
                <option>Matériel</option>
                <option>Compte</option>
                <option>Facturation</option>
            </select>
            <select className="form-control m-2" >
                <option>Priorités</option>
                <option>Basse</option>
                <option>Moyenne</option>
                <option>Haute</option>
                <option>Urgente</option>
            </select>
            <select className="form-control m-2">
                <option>Statuts</option>
                <option>Nouveau</option>
                <option>En cours</option>
                <option>Résolu</option>
                <option>Fermé</option>
            </select>
            <button className="btn btn-primary m-2">Create</button>
            <Link to="/tickets">
                <button className="btn btn-warning">Retour</button>
            </Link>
        </div>
        </div>
    );
}
 
export default AddTicket;
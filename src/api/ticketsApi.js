//page api/ticketsApi

import axios from "axios";
export const getTickets = () => 
  axios.get("http://localhost:5000/tickets");
export const getTicketById = (id) => 
  axios.get(`http://localhost:5000/tickets/${id}`);
export const createTicket = (data) => 
  axios.post("http://localhost:5000/tickets", data);

export const updateTicket = (id, data) => {
  if (data.statut === "Résolu" && !data.dateResolution) {
    data.dateResolution = new Date().toISOString();
  }
  return axios.put(`http://localhost:5000/tickets/${id}`, data);
};
export const deleteTicket = (id) => 
  axios.delete(`http://localhost:5000/tickets/${id}`)
  



export const updateTicket = (id, data) =>
  axios.put(`http://localhost:5000/tickets/${id}`, data);

import axios from "axios";

// جلب جميع التذاكر
export const getTickets = () => axios.get("http://localhost:5000/tickets");

// جلب تذكرة حسب id
export const getTicketById = (id) => axios.get(`http://localhost:5000/tickets/${id}`);

// إضافة تذكرة جديدة
export const createTicket = (data) => axios.post("http://localhost:5000/tickets", data);

// تعديل تذكرة
export const updateTicket = (id, data) => {
  // إذا تغير status لـ "Résolu" وسجل التاريخ
  if (data.statut === "Résolu" && !data.dateResolution) {
    data.dateResolution = new Date().toISOString();
  }
  return axios.put(`http://localhost:5000/tickets/${id}`, data);
};

// حذف تذكرة
export const deleteTicket = (id) => axios.delete(`http://localhost:5000/tickets/${id}`);

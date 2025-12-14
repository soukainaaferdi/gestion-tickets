/*import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const resolveTicket = createAsyncThunk(
  "tickets/resolve",
  (ticket) => {
    ticket.statut = "Résolu";
    ticket.resolvedAt = new Date().toISOString();

    return axios
      .put(`http://localhost:5000/tickets/${ticket.id}`, ticket)
      .then((response) => response.data);
  }
);*/
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const resolveTicket = createAsyncThunk(
  "tickets/resolve",
  (ticket) => {
    ticket.statut = "Résolu";
    ticket.dateResolution = new Date().toISOString();  // ← هنا بدل resolvedAt

    return axios
      .put(`http://localhost:5000/tickets/${ticket.id}`, ticket)
      .then((response) => response.data);
  }
);


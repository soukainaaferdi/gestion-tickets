import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const resolveTicket = createAsyncThunk(
  "tickets/resolve",
  (ticket) => {
    ticket.status = "résolu";
    ticket.resolvedAt = new Date().toISOString();
    return axios
      .put(`http://localhost:5000/tickets/${ticket.id}`, ticket)
      .then((response) => response.data);
  }
);

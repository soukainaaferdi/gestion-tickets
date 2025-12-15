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
);
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
);*/
import { createSlice } from "@reduxjs/toolkit";
import {getTickets,getTicketById,createTicket,updateTicket,deleteTicket,} from "../api/ticketsApi";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    currentTicket: null,
    loading: false,
    error: null,
  },
  reducers: {
    setTickets(state, action) {
      state.tickets = action.payload;
    },
    setCurrentTicket(state, action) {
      state.currentTicket = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setTickets,
  setCurrentTicket,
  setLoading,
  setError,
} = ticketsSlice.actions;
export const fetchTickets = () => (dispatch) => {
  dispatch(setLoading(true));
  getTickets()
    .then((res) => {
      dispatch(setTickets(res.data));
;
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    });
};

export const fetchTicketById = (id) => (dispatch) => {
  dispatch(setLoading(true));
  getTicketById(id)
    .then((res) => {
      dispatch(setCurrentTicket(res.data));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    });
};
export const addTicket = (ticket) => (dispatch) => {
  dispatch(setLoading(true));
  createTicket(ticket)
    .then((res) => {
      dispatch(fetchTickets()); 
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    });
};
export const editTicket = (id, ticket) => (dispatch) => {
  dispatch(setLoading(true));
  updateTicket(id, ticket)
    .then((res) => {
      dispatch(fetchTickets());
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    });
};
export const removeTicket = (id) => (dispatch) => {
  dispatch(setLoading(true));
  deleteTicket(id)
    .then(() => {
      dispatch(fetchTickets());
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    });
};

export default ticketsSlice.reducer;



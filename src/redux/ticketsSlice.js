import {getTickets,getTicketById,createTicket,updateTicket,deleteTicket,} from "../api/ticketsApi"
import { createSlice } from "@reduxjs/toolkit";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    currentTicket: null,
  },
  reducers: {
    setTickets(state, action) {
      state.tickets = action.payload;
    },
    setCurrentTicket(state, action) {
      state.currentTicket = action.payload;
    },
  },
});

export const fetchTickets = () => (dispatch) => {
  getTickets()
    .then((res) => {
      dispatch(setTickets(res.data));
    })
    .catch(console.error);
};

// Get single ticket by id
export const fetchTicketById = (id) => (dispatch) => {
  getTicketById(id)
    .then((res) => {
      dispatch(setCurrentTicket(res.data));
    })
    .catch(console.error);
};

// Add new ticket
export const addTicket = (ticket) => (dispatch) => {
  createTicket(ticket)
    .then(() => {
      dispatch(fetchTickets());
    })
    .catch(console.error);
};

// Edit ticket
export const editTicket = (id, ticket) => (dispatch) => {
  updateTicket(id, ticket)
    .then((res) => {
      dispatch(setCurrentTicket(res.data))
      dispatch(fetchTickets());
    })
    .catch(console.error);
};
// Delete ticket
export const supprimerTicket = (id) => (dispatch) => {
  deleteTicket(id)
    .then(() => {
      dispatch(fetchTickets());
    })
    .catch(console.error);
};

export const { setTickets, setCurrentTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;

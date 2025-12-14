
import { configureStore } from "@reduxjs/toolkit";
import { resolveTicket } from "./ticketsSlice"; 

export const store = configureStore({
  reducer: {
    tickets: resolveTicket,
  },
});


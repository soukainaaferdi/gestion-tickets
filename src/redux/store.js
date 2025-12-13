// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { resolveTicket } from "./ticketsSlice"; // تأكدي المسار صحيح

export const store = configureStore({
  reducer: {
    tickets: resolveTicket,
  },
});

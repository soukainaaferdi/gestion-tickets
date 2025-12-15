import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./ticketsSlice";  // ← استورد default

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,   // ← استعمل default reducer
  },
});

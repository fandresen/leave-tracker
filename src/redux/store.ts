import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import demandeAbsenceSlice from "./demandeAbsenceSlice";
import congerSlice from "./congerSlice";

export const store = configureStore({
  reducer: {
    theme:themeSlice,
    demande_Absence:demandeAbsenceSlice,
    conger:congerSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import demandeAbsenceSlice from "./demandeAbsenceSlice";
import congerSlice from "./congerSlice";
import AdminSlice from "./AdminSlice";

export const store = configureStore({
  reducer: {
    theme:themeSlice,
    demande_Absence:demandeAbsenceSlice,
    conger:congerSlice,
    admin:AdminSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type Rootstate = ReturnType<typeof store.getState>;

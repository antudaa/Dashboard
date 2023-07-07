import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authslice';
import authSlice from "./slices/authslice";
import assignUserReducer from "@/Redux/slices/userManagement/assignUserSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        assignUser: assignUserReducer,
    }
});

// export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type initialState = {
//     value: AuthState;
// };

// type AuthState = {
//     isAuth: boolean;
//     username: string;
//     uid: string;
//     isModerator: boolean;
// }

// const initialState = {
//     value: {
//         isAuth: false,
//         username: "",
//         uid: "",
//         isModerator: false,
//     }
// } as initialState;

interface AuthState {
    isAuthenticated: boolean;
    // Add any other authentication-related properties
  }
  
  const initialState: AuthState = {
    isAuthenticated: false,
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  export default authSlice.reducer;
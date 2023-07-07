'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    searchQuery: string;
    selectedRole: Record<string, string>;
    rowsPerPage: number;
    currentPage: number;
}

interface SetSearchQueryPayload {
    searchQuery: string;
}

interface SetSelectedRolePayload {
    id: string;
    value: string;
}

const initialState: UserState = {
    searchQuery: '',
    selectedRole: {},
    rowsPerPage: 5,
    currentPage: 1,
};

const assignUserSlice = createSlice({
    name: 'assignUser',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<SetSearchQueryPayload>) => {
            state.searchQuery = action.payload.searchQuery;
        },
        setSelectedRole: (state, action: PayloadAction<SetSelectedRolePayload>) => {
            const { id, value } = action.payload;
            state.selectedRole[id] = value;
        },
        setRowsPerPage: (state, action: PayloadAction<number>) => {
            state.rowsPerPage = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const {
    setSearchQuery,
    setSelectedRole,
    setRowsPerPage,
    setCurrentPage,
} = assignUserSlice.actions;

export default assignUserSlice.reducer;
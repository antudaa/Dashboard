"use client";

import { store } from '@/Redux/store';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster />

        </Provider>
    );
};

export default ReduxProvider;
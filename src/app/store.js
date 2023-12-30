import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        mail: mailReducer,
    },
});
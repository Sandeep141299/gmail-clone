import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sandmassegeisopen: false
    },

    reducers: {
        opnemassege: (state) => {
            state.sandmassegeisopen = true

        },
        closemassege: (state) => {
            state.sandmassegeisopen = false
        },


    },


});

export const { opnemassege, closemassege } = mailSlice.actions;


export const selectsandmassegeisopen = (state) => state.mail.sandmassegeisopen;



export default mailSlice.reducer;
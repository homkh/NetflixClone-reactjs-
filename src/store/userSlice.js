// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     movie_id: [],
// }
// const userSlice = createSlice({
//     name: 'movie',
//     initialState,
//     reducers: {
//         storeId: (state, action) => {
//             state.movie_id.push(action.payload);
//         },
//     }
// })

// export const { storeId } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movie_id: [],
}
const userSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        storeId: (state, action) => {
            state.movie_id = [...state.movie_id, action.payload];
        },
    }
})

export const { storeId } = userSlice.actions;
export default userSlice.reducer;
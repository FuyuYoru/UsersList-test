import { paginationVariable, paginationVariables } from "@/features/UsersTable/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tableParams {
    paginationType: paginationVariable,
    selectedPage: number,
}

const initialState:tableParams = {
    paginationType: paginationVariables[0],
    selectedPage: 0,
}

const tableSlice = createSlice({
    name: "table params",
    initialState: initialState,
    reducers: {
        setType: (state, action: PayloadAction<paginationVariable>) => {
            state.paginationType = action.payload;
            state.selectedPage = 0;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.selectedPage = action.payload;
        },
        resetType: (state) => {
            state.paginationType = paginationVariables[0];
        },
        resetPage: (state) => {
            state.selectedPage = 0;
        }
    }
})


export const {setType, setPage, resetType, resetPage} = tableSlice.actions;
export default tableSlice.reducer;
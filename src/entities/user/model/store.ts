import { IUser } from "@/entities/user/model/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
    users: IUser[],
}

const initialState: UsersState = {
    users: []
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }
    },
})

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;
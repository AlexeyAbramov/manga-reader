import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

/*
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
*/

type UserCompany = Record<"name" | "catchPhrase" | "bs", string>;

type AdressGeo = Record<"lat" | "lng", number>;

interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AdressGeo;
}

interface IUser {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  adress?: IAdress;
  phone?: string;
  website?: string;
  company?: UserCompany;
}

interface IState {
  users: IUser[];
  user: IUser;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

export const fetchById = createAsyncThunk(
  "users/fetchById",
  async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    const user = await res.json();

    return user;
  }
);

const initialState: IState = {
  users: [],
  user: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
      }
    );
    builder.addCase(
      fetchById.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      }
    );
  },
});

export default usersSlice.reducer;

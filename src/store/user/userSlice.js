import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const initialState = {
  loading: false,
  user: {
    uid: auth.currentUser?.uid,
    photoURL: auth.currentUser?.photoURL,
  },
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userInfo) => {
    console.log("hehehe")
    if (userInfo.uid == null) {
      return null;
    }
    const response = await axios.get("http://localhost:3000/user", {
      params: { uid: userInfo.uid },
    });
    return { ...response.data[0], ...userInfo };
  }
);

export const addUser = createAsyncThunk("user/addUser", async (userInfo) => {
  const response = await axios.post("http://localhost:3000/user", userInfo);
  return { ...response.data[0], ...userInfo };
});

export const signoutUser = createAsyncThunk("user/signout", async () => {
  signOut(auth);
  return null;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = auth.currentUser;
      state.error = action.error.message;
    });
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.user = auth.currentUser;
      state.error = action.error.message;
    });
    builder.addCase(signoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(signoutUser.rejected, (state, action) => {
      state.loading = false;
      state.user = auth.currentUser;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;

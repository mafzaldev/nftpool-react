import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nftId: "",
    nftImage: "",
    uploadDate: "",
    nftName: "",
    owner: "",
    cryptoValue: "",
    dollarValue: ""
  }

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    update: (state, action) => {
      state = action.payload
    }
  }
})

export default nftSlice.reducer
export const { update } = nftSlice.actions
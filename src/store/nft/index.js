import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nftId: "",
    nftImage: "",
    uploadDate: "",
    nftName: "",
    owner: "",
    cryptoValue: "",
    dollarValue: "",
    description: ""
}

const nftSlice = createSlice({
    name: 'nft',
    initialState,
    reducers: {
        update: (state, action) => {
            state.nftId = action.payload.nftId
            state.nftImage = action.payload.nftImage
            state.uploadDate = action.payload.uploadDate
            state.nftName = action.payload.nftName
            state.owner = action.payload.owner
            state.cryptoValue = action.payload.cryptoValue
            state.dollarValue = action.payload.dollarValue
            state.description = action.payload.description
        }
    }
})

export default nftSlice.reducer
export const { update } = nftSlice.actions
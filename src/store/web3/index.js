import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ethers } from 'ethers'
const initialState = {
  etherium: null,
  provider: null,
  contract: null,
  isLoading: false,
  error: ''
}
const NETWORK_ID = import.meta.env.VITE_PUBLIC_NETWORK_ID
export const initWeb3State = createAsyncThunk('web3/initWeb3State', async (name) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', []);
  const res = fetch(`/contracts/${name}.json`)
  const contractJson = await (await res).json();
  if (contractJson.networks[NETWORK_ID].address) {
    const contract = new ethers.Contract(
      contractJson.networks[NETWORK_ID].address,
      contractJson.abi,
      provider
    )
    const signer = provider.getSigner();
    const signedContract = contract.connect(signer);
    return {etherium: window.ethereum, provider, contract: signedContract};
  }
  else {
    return Promise.reject(`Contract: ${name} can't be loaded.`)
  }
})


const web3Slice = createSlice({
  name: 'web3',
  initialState,
  extraReducers: builder => {
    builder.addCase(initWeb3State.pending, state => {
      state.isLoading = true
    })
    builder.addCase(initWeb3State.fulfilled, (state, action) => {
      state.isLoading = false;
      state.etherium = action.payload.etherium;
      state.provider = action.payload.provider;
      state.contract = action.payload.contract;
      state.error = '';
    })
    builder.addCase(initWeb3State.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  }
})

export default web3Slice.reducer
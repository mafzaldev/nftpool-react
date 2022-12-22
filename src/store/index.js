import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import nftReducer from './nft'

const store = configureStore({
  reducer: {
    user: userReducer,
    nft: nftReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})


export default store
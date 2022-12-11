import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import web3ApiReducer from './web3'

const store = configureStore({
  reducer: {
    user: userReducer,
    web3Api: web3ApiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})


export default store
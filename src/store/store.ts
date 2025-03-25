import { configureStore } from "@reduxjs/toolkit";
import ProductDataSlice from "./slice/ProductData/ProductDataSlice";
import cartItemsSlice from "./slice/ProductData/ProductDataSlice";
import userReducer from "./slice/TodoData/todoSlice";
import userSlice from "./slice/TodoData/userSlice";


const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    ProductData: ProductDataSlice,
    cartItems: cartItemsSlice,
    user: userReducer,
    todo: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

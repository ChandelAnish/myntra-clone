import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import loadingStatusSlice from "./LoadingStatus";
import bagAndWishlistMarkerSlice from "./bagAndWishlistMarker";
import bagItemsSlice from "./bagSlice";
import productReducer from './productSlice';

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    loadingStatus: loadingStatusSlice.reducer,
    bagAndWishlistMarker: bagAndWishlistMarkerSlice.reducer,
    bagItems: bagItemsSlice.reducer,
    product: productReducer
  },
});

export default myntraStore;

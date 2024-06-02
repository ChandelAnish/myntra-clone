import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import loadingStatusSlice from "./LoadingStatus";
import bagAndWishlistMarkerSlice from "./bagAndWishlistMarker";
import bagItemsSlice from "./bagSlice";


const myntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        loadingStatus:loadingStatusSlice.reducer,
        bagAndWishlistMarker:bagAndWishlistMarkerSlice.reducer,
        bagItems:bagItemsSlice.reducer
    }
})

export default myntraStore;
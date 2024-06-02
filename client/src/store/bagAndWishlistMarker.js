import { createSlice } from "@reduxjs/toolkit";

const bagAndWishlistMarkerSlice = createSlice({
    name: "bagAndWishlistMarker",
    initialState: null,
    reducers: {
        markbag: (store, action) => {
            const {item,mark}=action.payload;
            // console.log("from slice : ",mark,item._id)
            const wishlistItem = async (item) => {
                const response = await fetch(`http://localhost:5000/items/${item._id}`, {
                    method: 'PATCH',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ add_to_bag: mark })
                })
                const data = await response.json();
                // console.log(data);
            }
            wishlistItem(item)
            return null;
        }
    }
})

export default bagAndWishlistMarkerSlice;
export const bagAndWishlistMarkerAction = bagAndWishlistMarkerSlice.actions;
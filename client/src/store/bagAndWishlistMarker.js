import { createSlice } from "@reduxjs/toolkit";

const bagAndWishlistMarkerSlice = createSlice({
    name: "bagAndWishlistMarker",
    initialState: null,
    reducers: {
        markbag: (store, action) => {
            const {item,mark}=action.payload;
            // console.log("from slice : ",mark,item._id)
            const markAddedBagItem = async (item) => {
                const response = await fetch(`${import.meta.env.VITE_URL}/items/${item._id}`, {
                    method: 'PATCH',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ add_to_bag: mark })
                })
                const data = await response.json();
                // console.log(data);
            }
            markAddedBagItem(item)
            return null;
        }
    }
})

export default bagAndWishlistMarkerSlice;
export const bagAndWishlistMarkerAction = bagAndWishlistMarkerSlice.actions;
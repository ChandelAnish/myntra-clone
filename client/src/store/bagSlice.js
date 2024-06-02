import { createSlice } from "@reduxjs/toolkit"

const bagItemsSlice = createSlice({
    name: "bagItems",
    initialState: [],
    reducers: {
        addInitialBagItems: (store, action) => {
            return action.payload;
        },

        addToBag: (store,action) => {
            //adding to DB
            const addToBag = async (item) => {
                const response = await fetch(`${import.meta.env.VITE_URL}/add-to-bag`, {
                    method: "post",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
            }
            addToBag(action.payload)
            store.push(action.payload);
        },

        deleteBagItem: (store, action) => {
            //deleting from DB
            const deleteBagItem = async (id) => {
                const response = await fetch(`${import.meta.env.VITE_URL}/bag-items/${id}`, {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
            }
            deleteBagItem(action.payload);
            const newstore = store.filter((item) => {
                return item._id != action.payload;
            })
            return newstore;
        }
    }
})


export const bagItemsAction = bagItemsSlice.actions;
export default bagItemsSlice;
import Item from "../components/Item"
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import { loadingStatusSliceAction } from "../store/LoadingStatus";

const Home = () => {

  const items = useSelector(store => store.items);
  const loadingStatus = useSelector(store => store.loadingStatus);
  const dispatch = useDispatch();
  // const [loading, setloading] = useState(false);

  //useEffect should not directly return a promise or an asynchronous function. The effect callback must return either undefined or a cleanup function. Returning a promise directly is not allowed because it would interfere with React's cleanup mechanism.
  useEffect(() => {
    async function fetchingItems() {
      dispatch(loadingStatusSliceAction.startloading())
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/items`);
        const items = await response.json();
        dispatch(itemsActions.addInitialItems(items));
      } catch (error) {
        console.log("error fetching the items")
      } finally {
        dispatch(loadingStatusSliceAction.stoploading())
        // setloading(false)
      }
    }
    fetchingItems();
  }, [])


  return (
    <main className="items">
      {(loadingStatus.loading) ? (<LoadingSpinner />) : (items.map((item) => <Item key={item._id} item={item}/>))}
    </main>
  )
}

export default Home;
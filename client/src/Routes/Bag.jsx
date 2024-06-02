import { useDispatch, useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import PriceDetails from "../components/PriceDetails";
import { useEffect } from "react";
import { loadingStatusSliceAction } from "../store/LoadingStatus";
import LoadingSpinner from "../components/loadingSpinner";
import { bagItemsAction } from "../store/bagSlice";

const Bag = () => {

    const bagItems = useSelector(store => store.bagItems)
    const loadingStatus = useSelector(store => store.loadingStatus)
    const dispatch = useDispatch();

    //fetching bag items
    useEffect(() => {
        async function fetchingBagItems() {
            dispatch(loadingStatusSliceAction.startloading())
            try {
                const response = await fetch(`${import.meta.env.VITE_URL}/bag-items`);
                const bagItems = await response.json();
                dispatch(bagItemsAction.addInitialBagItems(bagItems))
            } catch (error) {
                console.log("error fetching the bag items")
            } finally {
                dispatch(loadingStatusSliceAction.stoploading())
            }
        }
        fetchingBagItems();
    }, [])

    let totalPrice=0;
    let totalDiscountAmt=0;

    bagItems.map((item)=>{
        totalPrice+=item.current_price;
        totalDiscountAmt+=(item.discount_percentage/100)*item.current_price;
    })

    return (
        <div className="bag clearfix">
            <div className="float-start">
                {(loadingStatus.loading)?(<LoadingSpinner/>): (bagItems.map((item) => {
                    return (<BagItems key={item._id} item={item} />)
                }))}
            </div>
            <PriceDetails totalPrice={totalPrice.toFixed(2)} totalDiscountAmt={totalDiscountAmt.toFixed(2)}/>
        </div>
    )
}

export default Bag;
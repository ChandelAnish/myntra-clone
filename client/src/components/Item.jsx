import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAndWishlistMarkerAction } from "../store/bagAndWishlistMarker";
import { bagItemsAction } from "../store/bagSlice";


const Item = ({ item }) => {

    const bagAndWishlistMarker = useSelector(store => store.bagAndWishlistMarker)

    const bagItems = useSelector(store => store.bagItems)

    const dispatch = useDispatch();

    const [mark, setmark] = useState("black")

    const addToBag = async (item) => {
        dispatch(bagItemsAction.addToBag(item))
        dispatch(bagAndWishlistMarkerAction.markbag({ item: item, mark: true }))
        setmark("red");
    }


    return (
        <>
            <div className="item">
                <div className="img">
                    <img className="item-image img-fluid" src={item.image} alt="" />
                    <div className="rating">{item.rating.stars} ⭐ &nbsp;| &nbsp; {item.rating.count}</div>
                </div>
                <div className="product-brand">
                    <h3 className="brand">{item.company}</h3>
                    <h4 className="product">{item.item_name}</h4>
                    <div className="price">
                        <h4>Rs. {item.current_price}</h4>
                        <h3>Rs. {item.original_price}</h3>
                        <h2>( {item.discount_percentage}% OFF )</h2>
                    </div>
                    <IoIosHeartEmpty className="wishlist-bag-item" />
                    <BsHandbag className="wishlist-bag-item" style={{ color: (item.add_to_bag || mark === "red") ? "red" : "black" }} onClick={() => { addToBag(item) }} />
                </div>
            </div>
        </>
    )
}

export default Item;
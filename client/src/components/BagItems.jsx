import { PiKeyReturn } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAndWishlistMarkerAction } from "../store/bagAndWishlistMarker";
import { bagItemsAction } from "../store/bagSlice";

const BagItems = ({item}) => {

    const bagAndWishlistMarker = useSelector(store => store.bagAndWishlistMarker)

    const bagItems = useSelector(store => store.bagItems)

    const dispatch = useDispatch();

    const deleteBagItem=async(id)=>{
        dispatch(bagItemsAction.deleteBagItem(id))
        dispatch(bagAndWishlistMarkerAction.markbag({item:item,mark:false}))
    }

    return (
        <div className="card p-3 m-3 me-1">
            <div className="clearfix itemcard">

                <div className="float-start clearfix">
                    <div className="bagItemImg float-start">
                        <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div className="float-end ms-3 bagItemDetails">
                        <h5 style={{ marginBottom: "0px", fontSize: "15px", fontWeight: "500" }}>{item.company}</h5>

                        <p style={{ marginBottom: "0px", fontSize: "15px", fontWeight: "300" }}>{item.item_name}</p>

                        <p style={{ marginBottom: "8px", fontSize: "12px", fontWeight: "200", color: "#a1a1a1" }}>Sold by : {item.sold_by}</p>

                        <div style={{ display: "flex" }}>
                            <div className="me-2 bg-body-secondary" style={{ padding: "2px", borderRadius: "2px" }}>Size  : {item.size} <IoMdArrowDropdown /></div>

                            <div className="bg-body-secondary" style={{ padding: "2px", borderRadius: "2px" }}>Qty : {item.quantity} <IoMdArrowDropdown /></div>
                        </div>

                        <div className="price">
                            <h4>Rs. {item.current_price}</h4>
                            <h3>Rs. {item.original_price}</h3>
                            <h2>( {item.discount_percentage}% OFF )</h2>
                        </div>

                        <div style={{ display: "flex", margin: "0px" }}>
                            <PiKeyReturn className="fs-5" />
                            {item.return_period} days &nbsp; <p style={{ color: "rgb(125 121 121)", fontWeight: "300", margin: "0px" }}>return available</p>
                        </div>
                    </div>
                </div>

                <button type="button" className="btn-close float-end" aria-label="Close" onClick={()=>deleteBagItem(item._id)}></button>
            </div>
        </div>
    )
}

export default BagItems;
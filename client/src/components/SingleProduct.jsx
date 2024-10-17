import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../SinglePage.css";
import { FaStar } from "react-icons/fa";
import { CgHeart } from "react-icons/cg";
import { HiShoppingBag } from "react-icons/hi";
import { BsTruck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/productSlice";
import { loadingStatusSliceAction } from "../store/LoadingStatus";
import { bagItemsAction } from "../store/bagSlice";
import LoadingSpinner from "./loadingSpinner";

const SingleProduct = () => {
  // Getting Id Via Url Of Page
  const { id } = useParams();

  const dispatch = useDispatch();
  const loadingStatus = useSelector((store) => store.loadingStatus);
  const singleItem = useSelector((state) => state.product.item);
  
  useEffect(() => {
    async function fetchingItems() {
      dispatch(loadingStatusSliceAction.startloading());
      try {
        const url = `${import.meta.env.VITE_URL}/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.success) {
          dispatch(setProduct(data.product));
          dispatch(loadingStatusSliceAction.stoploading());
        } else {
          dispatch(loadingStatusSliceAction.stoploading());
          console.log("Failed to fetch the product");
        }
      } catch (error) {
        dispatch(loadingStatusSliceAction.stoploading());
        console.log("error fetching the item");
      }
    }
    fetchingItems();
  }, [dispatch, id]);

  if (!singleItem) {
    return <div>Loading...</div>;
  }

  const handleAddToBag = (item) => {
    dispatch(bagItemsAction.addToBag(item));
  };

  return (
    <>
      {loadingStatus.loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <div className="flex-container">
            <div className="image-container">
              <img src={singleItem.image} alt={singleItem.item_name} />
            </div>
            <div className="details-container">
              <h2>{singleItem.company}</h2>
              <p className="item-name">{singleItem.item_name}</p>
              <p className="rating-stars">
                {singleItem.rating.stars} <FaStar className="star" />{" "}
                <span className="divide"> | </span> {singleItem.rating.count}{" "}
                Ratings
              </p>

              <hr />

              <div className="price-container">
                <div className="price">
                  <span className="current-price">
                    ₹{singleItem.current_price}
                  </span>
                  <p style={{ color: "#777" }}>
                    ₹MRP
                    <span className="original-price">
                      {singleItem.original_price}
                    </span>
                  </p>
                  <span className="discount">
                    ({singleItem.discount_percentage}% OFF)
                  </span>
                </div>
                <p>inclusive of all taxes</p>
              </div>
              <div>
                <div className="size-text">
                  <p>SELECT SIZE</p>{" "}
                  <p className="size-chart">SIZE CHART {" > "}</p>
                </div>
                <div className="size-options">
                  <button>{singleItem.size}</button>
                </div>
              </div>
              <div className="btn-container">
                <button className="add-to-bag" onClick={() => handleAddToBag(singleItem)}>
                  <span> ADD TO BAG </span>
                  <HiShoppingBag className="btn-icon" />{" "}
                </button>
                <button className="wishlist">
                  <span> WISHLIST </span>
                  <CgHeart className="btn-icon" />
                </button>
              </div>
              <hr />

              <div className="delivery-options">
                <h2>
                  DELIVERY OPTIONS <BsTruck className="truck-icon" />
                </h2>
                <form className="pincode-wrapper">
                  <input
                    type="text"
                    className="pincode-input"
                    placeholder="Enter pincode"
                    required
                  />
                  <button type="submit" className="check-btn">
                    Check
                  </button>
                </form>
                <p className="delivery-info">
                  Please enter PIN code to check delivery time & Pay on Delivery
                  Availability
                </p>
                <ul className="benefits-list">
                  <li>100% Original Products</li>
                  <li>Pay on delivery might be available</li>
                  <li>Easy 14 days returns and exchanges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;

import { useSelector } from "react-redux";

const PriceDetails = ({totalPrice,totalDiscountAmt}) => {

    const bagItems = useSelector(store => store.bagItems)

    return (
        <div className="price-details border-start-1 border-start border-1 border-dark-subtle float-end">
            <h4 style={{ fontWeight: "700", fontSize: "13px", color: "#747474", marginBottom: "15px" }}>PRICE DETAILS (item {bagItems.length})</h4>
            <h4>Total Price
                <p className="float-end clearfix">₹{totalPrice}</p>
            </h4>
            <h4>Discount on MRP
                <p className="float-end clearfix text-success">-₹{totalDiscountAmt}</p>
            </h4>
            <h4>Coupon Discount
                <p className="float-end clearfix text-danger">Apply Coupon</p>
            </h4>
            <h4>Platform Fee
                <p className="float-end clearfix text-success">FREE</p>
            </h4>
            <h4 style={{ marginBottom: "0px" }}>Shipping Fee
                <p className="float-end clearfix text-success">FREE</p>
            </h4>
            <h3>Free shipping for you</h3>
            <hr style={{ width: "100%" }} />
            <h4 style={{ fontWeight: "500", fontSize: "14px", color: "#353535", marginBottom: "12px" }}>Total Amount
                <p className="float-end clearfix" style={{ fontWeight: "500", fontSize: "14px", color: "#353535" }}>₹{(totalPrice-totalDiscountAmt).toFixed(2)}</p>
            </h4>
            <button className="container-fluid" style={{ height: "40px", borderRadius: "2px" }}>PLACE ORDER</button>
        </div>
    )
}

export default PriceDetails;
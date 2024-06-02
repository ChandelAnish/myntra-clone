import { SlUser } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const User = () => {

    const bagItems = useSelector(store => store.bagItems)

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-end">
            <li><Link className="user-li" to="#"><SlUser />User</Link></li>
            <li><Link className="user-li" to="#"><IoIosHeartEmpty />Wishlist</Link></li>
            <li><Link className="user-li position-relative" to="/bag"><BsHandbag />
                Bag
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {bagItems.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </Link></li>
        </ul>
    )
}

export default User;
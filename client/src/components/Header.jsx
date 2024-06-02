import { Link } from "react-router-dom";
import Search from "./Search";
import User from "./User";


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: "5.5rem" }}>
                <div className="container-fluid" style={{ marginLeft: "3rem" }}>
                    <Link className="navbar-brand" to="/"><img className="logo" src="../assets/myntra-logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME & LIVING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">BEAUTY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">STUDIO</a>
                            </li>

                        </ul>
                        <Search />
                        <div className="d-flex">
                            <User />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
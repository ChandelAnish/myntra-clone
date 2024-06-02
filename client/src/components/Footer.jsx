import { ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="py-5 mx-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h6>ONLINE SHOPPING</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h6>CUSTOMER POLICIES</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h6>REGISTERED OFFICE ADDRESS</h6>
                        <p style={{color:"grey"}}>Buildings Alyssa,
                            Begonia and Clover situated in Embassy Tech Village,
                            Outer Ring Road,
                            Devarabeesanahalli Village,
                            Varthur Hobli,
                            Bengaluru – 560103, India</p>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h5>
                            <p style={{color:"grey"}}>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <button type="button" className="btn btn-secondary">Explore</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© Myntra, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><ImTwitter /></a></li>

                        <li className="ms-3"><a className="link-body-emphasis" href="#"><RiInstagramFill /></a></li>

                        <li className="ms-3"><a className="link-body-emphasis" href="#"><FaFacebook /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/home/Footer";
import Navbar from "../pages/home/Navbar";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login', 'register')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            <ToastContainer />
        </div>
    );
};

export default Root;
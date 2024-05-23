import { AiFillHome } from "react-icons/ai";
import { FaClipboardList, FaShoppingCart } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";
import { PiListHeartFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen p-6 bg-yellow-600">
        <div className=" flex mx-auto pl-6 flex-col">
          <h1 className="font-bold text-3xl">BISTRO BOSS</h1>
          <p className=" text-xl tracking-[.39em]">RESTAURANT</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <AiFillHome />
              USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarDays />
              RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <RiSecurePaymentFill />
              PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart />
              MY CART
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <PiListHeartFill />
              ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <FaClipboardList />
              My BOOKING
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiFillHome />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
            <IoMenu />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
            <GiShoppingBag />
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
            <MdForwardToInbox />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard */}
      <div className="flex-1 bg-red-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

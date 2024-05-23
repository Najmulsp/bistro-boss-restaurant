import { RiDeleteBin5Fill } from "react-icons/ri";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../shared/SectionTitle";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item)=> total+item.price , 0)
  return (
    <div>
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="---My Cart---"
      ></SectionTitle>
      <div className="w-10/12 mx-auto bg-white border">
        <div className="flex justify-around py-4">
            <p className="text-3xl font-bold">Total orders: {cart.length}</p>
            <p className="text-3xl font-bold">total price: ${totalPrice}</p>
            <button className="btn bg-yellow-600  text-white">Pay</button>
        </div>
        <div className="overflow-x-auto">
  <table className="table w-10/12 mx-auto">
    {/* head */}
    <thead className="">
      <tr className="bg-yellow-500 rounded-t-2xl">
        <th></th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
        {
        cart.map(item =>
            <tr key={item._id} className="hover">
        <th>{1}</th>
        <td><img className="w-28 h-28"  src={item.image} alt="" /></td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td><button className="btn bg-red-700"><RiDeleteBin5Fill className="text-white"/></button></td>
      </tr>
        )
        }
    
      
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Cart;

import { RiDeleteBin5Fill } from "react-icons/ri";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../shared/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          
          if (res.data.deletedCount) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
              {cart.map((item, index) => (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <img className="w-28 h-28" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-red-700"
                    >
                      <RiDeleteBin5Fill className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

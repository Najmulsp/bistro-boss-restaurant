import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../shared/SectionTitle";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";


const Alluser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleMakeAdmin = (user) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, make admin",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.patch(`/users/admin/${user._id}`)
            .then((res) => {
              refetch()
              if (res.data.modifiedCount){
                Swal.fire({
                  title: "Success",
                  text: `${user.name} is an admin now`,
                  icon: "success",
                });
              }
            });
          }
        });
      };
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
            axiosSecure.delete(`/users/${id}`).then((res) => {
              
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
        heading="MANAGE ALL USERS"
        subHeading="---How Many??---"
      ></SectionTitle>
      <div className="w-10/12 mx-auto bg-white border">
        <div className="flex justify-around py-4">
          <p className="text-3xl font-bold">Total users: {users.length}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-10/12 mx-auto">
            {/* head */}
            <thead className="">
              <tr className="bg-yellow-500 rounded-t-2xl">
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin'? 'Admin' :<button onClick={() => handleMakeAdmin(user)} className="bg-yellow-600 btn mt-3"><FaUsers className="text-xl" />
                    </button>}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default Alluser;
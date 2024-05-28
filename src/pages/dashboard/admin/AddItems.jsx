import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../shared/SectionTitle";
import { useForm} from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
  } 

  return (
    <div>
      <SectionTitle
        heading="ADD AN ITEM"
        subHeading="---What's new?---"
      ></SectionTitle>

      <section className="p-6  dark:text-gray-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="w-10/12 p-10 mx-auto bg-zinc-100 border flex flex-col space-y-12"
        >
          <fieldset className="mx-10">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Recipe name*
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Recipe name"
                  {...register("name", { required: true})}
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 border"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Category*
                </label>
                <select {...register("category", { required: true})} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Select A Category
                  </option>
                  <option>Salad</option>
                  <option>Dessert</option>
                  <option>Pizza</option>
                  <option>Soup</option>
                  <option>Drink</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Price*
                </label>
                <input
                  id="website"
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true})}
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 border"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Recipe Details*
                </label>
                <textarea
                  id="bio"
                  rows={5}
                  placeholder="Recipe Details"
                  {...register("recipe")}
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 border col-span-10"
                ></textarea>
              </div>
              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                <input {...register("image", { required: true})} type="file" className="file-input  file-input-bordered w-full max-w-xs" />
                 
                </div>
                <button className="btn mt-2 bg-yellow-600 font-bold text-white">
                  Add Item <FaUtensils />
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddItems;

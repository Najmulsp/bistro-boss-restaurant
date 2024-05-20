import PropTypes from 'prop-types';



const FoodCard = ({item}) => {
 
const {image, price, recipe, name} = item;

    return (
        <div>
    <div className="max-w-md hover:scale-[1.05] transition-all shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        <div className='relative'>
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full  h-72 dark:bg-gray-500"
        />
        <p className='absolute top-5 right-5 bg-black text-white py-1 px-3'>$   {price}</p>
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
            {name}
            </h2>
            <p className="dark:text-gray-800">
            {recipe}
            </p>
          </div>
          <button
            type="button"
            className="btn w-2/3 mx-auto btn-outline border-b-4 border-yellow-600 text-yellow-600 uppercase text-lg"
          >
            add to cart
          </button>
        </div>
      </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object,
    
}
export default FoodCard;
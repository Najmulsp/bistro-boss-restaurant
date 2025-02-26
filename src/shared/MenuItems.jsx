import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MenuItems = ({ items, btnText, title }) => {
    
  return (
    <div>
    
      <div className="grid lg:grid-cols-2 gap-10">
        {items?.map((singleItem) => 
          <div key={singleItem._id} className="flex p-6 space-x-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={singleItem.image}
        className="w-24 h-24"
        alt=""
      />
      <div>
        <h1>{singleItem.name}-------</h1>
        <p>{singleItem.recipe}</p>
      </div>
      <p className="text-yellow-600">${singleItem.price}</p>
      
    </div>
        )}
      </div>
      <div className="text-center pb-10">
      <Link to={`/order/${title}`}>
      <button className="btn mx-auto btn-outline  border-b-4 border-black dark:border-white uppercase text-lg mt-4">
        {btnText}
      </button>
      </Link>
    </div>
    </div>
  );
};
MenuItems.propTypes = {   
    items: PropTypes.array,
    btnText: PropTypes.string,
    title: PropTypes.string,
   
}
export default MenuItems;

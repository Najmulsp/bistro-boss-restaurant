// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FoodCard from "./FoodCard";
import PropTypes from "prop-types";

const FoodTabs = ({ items }) => {
  // console.log(items);
  const slide1 = items.slice(0, 5);
  const slide2 = items.slice(6, 9);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10">
            {slide1.map((slide) => (
              <FoodCard key={slide._id} item={slide}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10">
            {slide2.map((slide) => (
              <FoodCard key={slide._id} item={slide}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
FoodTabs.propTypes = {
  items: PropTypes.array,
};
export default FoodTabs;

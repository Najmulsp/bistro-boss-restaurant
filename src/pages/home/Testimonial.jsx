
import icons from "../../assets/icon/quote-left 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="dark:bg-gray-50 dark:text-gray-800">
      <div className="text-center mb-10 pt-10">
        <h2 className="text-2xl text-yellow-600 py-4">
          ---What Our Clients Say---
        </h2>
        <h1 className="text-4xl font-semibold border-y-4 py-4 w-96 mx-auto uppercase">
          TESTIMONIALS
        </h1>
      </div>
      <section className="pb-6">
     <div className="container  mx-auto">
         
        </div>
      </section>
      <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              loop= {true}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                    <div className="text-center dark:text-gray-600">
                      <img src={review.image} className="h-28 w-28 rounded-full mx-auto " alt="" />
                      <h2 className="text-3xl text-yellow-600 p-2">{review.name}</h2>
                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 ">
                    <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            
 
          </div>
              <p className=" w-4/5 mx-auto pb-6">
                Various version have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <img src={icons} className="mx-auto pb-6" alt="" />
            </div>
                    
                    </SwiperSlide>
              ))}
            </Swiper>
    </div>
  );
};

export default Testimonial;

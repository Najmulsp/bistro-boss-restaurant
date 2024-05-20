import Marquee from "react-fast-marquee";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import chefService from "../../assets/home/chef-service.jpg";

const Category = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl text-yellow-600 py-4">
          ---From 11.00 am to 10.00 pm---
        </h2>
        <h1 className="text-4xl  font-semibold border-y-4 py-4 w-96 mx-auto uppercase">
          Order Online
        </h1>
      </div>
<Marquee className="">
        <div className=" px-4">
          <img src={slide1} className="myChoice" alt="" />
          <h2 className="text-4xl text-center uppercase  text-white -mt-20 shadow-lg">
            Salad
          </h2>
        </div>

        <div className=" px-4">
          <img src={slide2} className="myChoice" alt="" />
          <h2 className="text-4xl text-center uppercase  text-white -mt-20">
            Soups
          </h2>
        </div>
        <div className=" px-4">
          <img src={slide3} className="myChoice" alt="" />
          <h2 className="text-4xl text-center uppercase  text-white -mt-20">
            Pizzas
          </h2>
        </div>
        <div className=" px-4">
          <img src={slide4} className="myChoice " alt="" />
          <h2 className="text-4xl text-center uppercase  text-white -mt-20">
            Desserts
          </h2>
        </div>
        <div className=" px-4">
          <img src={slide5} className="myChoice" alt="" />
          <h2 className="text-4xl text-center uppercase  text-white -mt-20">
            Salad
          </h2>
        </div>
      </Marquee>
      <div className="my-16 relative">
        <div>
          <img src={chefService} alt="" className="h-96 lg:h-full" />
        </div>
        <div className="absolute bg-white text-center text-black w-9/12 top-20 lg:top-28 left-12 lg:left-36 py-2 lg:py-4">
          <h1 className="py-2 px-10 text-3xl">Bistro Boss</h1>
          <p className="py-2 px-10 w-2/3 mx-auto hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur unde doloribus et, recusandae itaque eius, delectus
            labore, excepturi impedit incidunt harum. Nostrum aut voluptatum
            temporibus repellat, quam asperiores illo, recusandae quo cumque
            ipsa.
          </p>
          <p className="py-2 px-10 w-5/6 lg:w-2/3 mx-auto visible lg:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur unde doloribus et, recusandae itaque eius, delectus
            labore,
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Category;

import featureImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="mt-10">
      {/* by using bg-fixed it has become parallax */}
      <div
        className="hero min-h-screen bg-fixed"
        style={{ backgroundImage: `url(${featureImg})` }}
      >
        <div className="hero-overlay bg-gray-950 bg-opacity-70">

        <div className="text-center mt-10">
            <h2 className="text-2xl text-yellow-600 py-4">
              ---From 11.00 am to 10.00 pm---
            </h2>
            <h1 className="text-4xl text-white font-semibold border-y-4 py-4 w-96 mx-auto uppercase">
              Order Online
            </h1>
          </div>
        </div>
    
<div className="w-2/3 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center mt-64 lg:mt-24">
<div>
    <img src={featureImg} alt="" />
</div>
<div className="text-white pb-8 lg:pb-0">

    <p><span className="text-2xl">March 20, 2023
WHERE CAN I GET SOME?</span> <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
<button className="btn w-2/3 mx-auto btn-outline border-0 border-b-4 border-white text-white uppercase text-lg outline-coll mt-4">Read More</button>
</div>
</div>
        </div>
      </div>
    
  );
};

export default Featured;

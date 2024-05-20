import img1 from '../../assets/home/slide5.jpg'



const Recommends = () => {
  return (
    <div>
       <div className="bg-black w-full h-72 my-10 flex justify-center items-center">
                    <h1 className="text-4xl text-white">Call Us: +88 0192345678910</h1>
            </div>
        <div className='text-center mb-10 '>
                <h2 className='text-2xl text-yellow-600 py-4'>---Should Try---</h2>
                <h1 className='text-4xl font-semibold border-y-4 py-4 w-96 mx-auto uppercase'>CHEF RECOMMENDS</h1>
            </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      <div className="max-w-md hover:scale-[1.05] transition-all shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={img1}
          alt=""
          className="object-cover object-center w-full  h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
            Caeser Salad
            </h2>
            <p className="dark:text-gray-800">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
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
      <div className="max-w-md hover:scale-[1.05] transition-all shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={img1}
          alt=""
          className="object-cover object-center w-full  h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
            Caeser Salad
            </h2>
            <p className="dark:text-gray-800">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <button
            type="button"
            className="btn w-2/3 mx-auto uppercase text-yellow-600 text-lg"
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="max-w-md hover:scale-[1.05] transition-all shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={img1}
          alt=""
          className="object-cover object-center w-full  h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">
            Caeser Salad
            </h2>
            <p className="dark:text-gray-800">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
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
</div>
  );
};

export default Recommends;

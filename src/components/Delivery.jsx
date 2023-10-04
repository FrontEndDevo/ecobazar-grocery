import deliveryImg from "../assets/images/home_page/delivery/delivery.webp";
import bike from "../assets/images/home_page/delivery/bike_deliver.svg";
const Delivery = () => {
  const bikeDelivery = (
    <div className="absolute p-8 text-center bg-white right-0 bottom-10 lg:left-[75%] lg:bottom-1/3 rounded-2xl w-60">
      <img
        src={bike}
        alt="Delivery man"
        className="px-12 py-4 bg-green-50 w-fit rounded-2xl"
      />
      <h4 className="mt-4 mb-2 text-base font-bold text-main-700">
        Bike Delivery
      </h4>
      <p className="text-xs text-main-500">
        Bicycle service ensures that your packages arrive quickly
      </p>
    </div>
  );

  return (
    <section className="py-10 lg:py-4">
      <div className="container flex flex-col items-center justify-between lg:flex-row-reverse">
        <div className="relative pb-60 lg:p-0 basis-4/12">
          <img src={deliveryImg} alt="chef man" className="w-full" />
          {bikeDelivery}
        </div>

        <div className="mx-4 text-center xl:basis-6/12 lg:basis-8/12 lg:text-start">
          <h6 className="text-base text-yellow-500 uppercase lg:text-xl">
            Home delivery
          </h6>
          <h2 className="mt-4 mb-8 text-3xl font-bold leading-tight lg:text-5xl text-main-700">
            Sit at Home We Will Take Care Your Order
          </h2>
          <p className="text-base text-main-500 lg:text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
          </p>
          <button className="w-full px-8 py-4 mt-12 text-xl duration-300 bg-transparent border-2 border-primary-500 text-primary-500 hover:text-white lg:w-fit rounded-xl hover:bg-primary-500">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

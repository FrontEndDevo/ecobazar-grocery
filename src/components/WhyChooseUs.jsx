import chooseUs from "../assets/images/home_page/choose_us.webp";
import SuggestedProduct from "./SuggestedProduct";
const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-4 bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-10 lg:gap-32 lg:flex-row">
        <div className="relative pb-40 basis-1/2">
          <img
            src={chooseUs}
            alt="Why should you choose us?"
            className="w-full"
          />
          <div className="absolute -bottom-12 left-2 lg:left-[80%] xl:bottom-[30%] lg:bottom-[10%]">
            <SuggestedProduct />
          </div>
        </div>
        <div className="mx-4 text-center xl:px-20 basis-1/2 lg:text-start">
          <h5 className="text-base uppercase text-primary-500 lg:text-xl">
            Why choose us
          </h5>
          <h2 className="mt-4 mb-8 text-3xl font-bold capitalize lg:text-5xl text-main-700">
            Find Favorites and Discover New Ones
          </h2>
          <p className="mb-10 text-base text-main-500 lg:text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesen voluptatum deleniti.
          </p>
          <button className="w-full px-8 py-4 text-white duration-300 border-2 bg-primary-500 lg:w-fit rounded-xl hover:bg-transparent border-primary-500 hover:text-primary-500">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

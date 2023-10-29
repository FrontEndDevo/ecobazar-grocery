import imageOne from "../assets/images/home_page/OrganicFoodFeature/image_one.webp";
import imageTwo from "../assets/images/home_page/OrganicFoodFeature/image_two.webp";
import backgroundOne from "../assets/images/home_page/OrganicFoodFeature/bg_one.webp";
import backgroundTwo from "../assets/images/home_page/OrganicFoodFeature/bg_two.webp";
import backgroundThree from "../assets/images/home_page/OrganicFoodFeature/bg_three.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const foodFeatures = [
  {
    title: "Healthy & natural food for lovers of healthy food.",
    description:
      "Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.",
  },
  {
    title: "Every day fresh and quality products for you.",
    description:
      "Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.",
  },
];

const OrganicFoodFeature = () => {
  const ourFeatures = (
    <div className="my-8">
      {foodFeatures.map((feature, index) => (
        <div key={index} className="flex gap-4 my-6 text-center lg:text-start">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="hidden text-xl text-primary-700 lg:block"
          />
          <div>
            <h4 className="mb-2 text-base font-bold text-main-700">
              {feature.title}
            </h4>
            <p className="text-sm text-justify text-main-100">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-20 bg-slate-50">
      <div className="container flex flex-col items-center xl:mx-0 xl:flex-row xl:gap-40 2xl:gap-10">
        <div>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <img
              src={imageOne}
              alt="Organic Food image 1"
              className="w-full xl:w-80"
            />
            <img
              src={imageTwo}
              alt="Organic Food image 2"
              className="w-full xl:w-96"
            />
          </div>
          <div>
            <img
              src={backgroundOne}
              alt="Organic Food background 1"
              className="absolute left-0 w-28 top-12"
            />
            <img
              src={backgroundTwo}
              alt="Organic Food background 2"
              className="absolute w-28 left-12 bottom-12"
            />
            <img
              src={backgroundThree}
              alt="Organic Food background 3"
              className="absolute top-0 w-28 right-12"
            />
          </div>
        </div>

        <div className="z-40 mx-4 mt-8 lg:mt-0 xl:mx-0 basis-1/2">
          <h2 className="text-xl font-bold text-center md:text-2xl lg:text-4xl xl:text-start text-main-700">
            100% Trusted Organic Food Store
          </h2>
          {ourFeatures}
          <Link
            to="/shop"
            className="flex items-center justify-center gap-4 px-6 py-4 text-white duration-200 rounded-full w-fit lg:w-fit lg:px-12 bg-primary-500 hover:bg-primary-700"
          >
            Shop Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrganicFoodFeature;

import imageOne from "../assets/images/home_page/OrganicFoodFeature/image_one.webp";
import imageTwo from "../assets/images/home_page/OrganicFoodFeature/image_two.webp";
import backgroundOne from "../assets/images/home_page/OrganicFoodFeature/bg_one.webp";
import backgroundTwo from "../assets/images/home_page/OrganicFoodFeature/bg_two.webp";
import backgroundThree from "../assets/images/home_page/OrganicFoodFeature/bg_three.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

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
    <div>
      {foodFeatures.map((feature, index) => (
        <div key={index}>
          <FontAwesomeIcon icon={faCircleCheck} />
          <div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <div>
        <div>
          <img src={imageOne} alt="Organic Food image 1" />
          <img src={imageTwo} alt="Organic Food image 2" />
        </div>
        <img src={backgroundOne} alt="Organic Food background 1" />
        <img src={backgroundTwo} alt="Organic Food background 2" />
        <img src={backgroundThree} alt="Organic Food background 3" />
      </div>

      <div>
        <h2>100% Trusted Organic Food Store</h2>
        {ourFeatures}
        <button className="flex items-center justify-center gap-4 px-6 py-4 text-white duration-200 rounded-full lg:px-12 bg-primary-500 hover:bg-primary-700">
          Shop Now <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
};

export default OrganicFoodFeature;

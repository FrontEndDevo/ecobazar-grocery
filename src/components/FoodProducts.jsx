import { Link } from "react-router-dom";
import meals from "../assets/images/home_page/FoodProducts/meals.webp";
import rests from "../assets/images/home_page/FoodProducts/restaurants.webp";
import drinks from "../assets/images/home_page/FoodProducts/drinks.webp";
const FoodProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="meals">
          <img src={meals} alt="Meals background" />
          <div>
            <h6>100% Organic</h6>
            <h2>Delicious Meals</h2>
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>

        <div className="restaurants">
          <img src={rests} alt="Restaurant background" />
          <div>
            <h2>the best restaurants in the world</h2>
            <Link to="/restaurants">Explore Now</Link>
          </div>
        </div>

        <div className="drinks">
          <img src={drinks} alt="Drinks background" />
          <div>
            <h6>drink sale</h6>
            <h2>Water & Soft Drink</h2>
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;

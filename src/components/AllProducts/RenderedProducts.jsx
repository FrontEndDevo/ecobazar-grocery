import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RenderedProducts = ({ productType }) => {
  console.log(productType.target);
  // Render all products (vegetables, fruits, ...etc):
  const renderedProducts = productType.target.slice(0, 10).map((item, i) => {
    // Detect the kind of products(vegetables, fruits, meals,...etc), to render correct title & img:
    const title =
      productType.id == 1 // Vegetables
        ? item.vegetablesDetails.name
        : productType.id == 2 // Fruits
        ? item.fruitDetails.fruitName
        : productType.id == 3 // Meals
        ? item.strMeal
        : productType.id == 4 // Drinks
        ? ""
        : null;

    const img =
      productType.id == 1 // Vegetables
        ? item.vegetablesDetails.photo_url
        : productType.id == 2 // Fruits
        ? item.fruitDetails.img
        : productType.id == 3 // Meals
        ? item.strMealThumb
        : productType.id == 4 // Drinks
        ? ""
        : null;

    const price =
      productType.id == 1 // Vegetables
        ? item.vegetablesDetails.price
        : productType.id == 2 // Fruits
        ? item.fruitDetails.price
        : productType.id == 3 // Meals
        ? item.price
        : productType.id == 4 // Drinks
        ? ""
        : null;

    return (
      <li key={i}>
        <img src={img} alt={title} />
        <div>faviorate...etc</div>
        <div>
          <div>
            <h4>{title}</h4>
            <span>{price}</span>
            <div>
              {[...Array(4)].map((e, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-sm text-yellow-500"
                />
              ))}
              <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
            </div>
          </div>
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-lg text-green-600"
          />
        </div>
      </li>
    );
  });

  return <ul>{renderedProducts}</ul>;
};

export default RenderedProducts;

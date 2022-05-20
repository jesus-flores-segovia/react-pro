import ProductCard from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard product={product} className={"bg-dark"}>
        <ProductCard.Image className={"custom-image"} />
        <ProductCard.Title className={"text-white text-bold"} />
        <ProductCard.Buttons className={"text-white custom-buttons"} />
      </ProductCard>
    </div>
  );
};

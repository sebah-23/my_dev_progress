import products from "../../data/products.js";
import ProductCard from "../ProductCard/ProductCard.js";

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
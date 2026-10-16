import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import products from "../../../data/products.js";

function Popular() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-12 bg-gray-100">
      <div className="mb-8 mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 sm:text-3xl">Popular This week</h2>
        <p className="text-sm text-gray-600 mt-2 sm:text-base">Check out our most popular products!</p>
        
      </div>
      
      <ProductGrid products={products.slice(0, 4)} />
    </section>
  );
}

export default Popular;
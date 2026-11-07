import { Link, useParams } from "react-router-dom";
import products from "../../data/products";
function ProductDetails() {
 const { id } = useParams();

   const product = products.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-pink-50 px-4 py-12">
        <h1 className="mx-auto max-w-3xl rounded-xl bg-white p-6">Product not found</h1>
        <p  className="mt-2 text-gray-600">Sorry, we couldn't find that product.</p>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-pink-50 px-4 py-6">
      <section>
<nav className="flex items-center gap-2 text-sm text-gray-500">
  <Link
    to="/"
    className="transition hover:text-pink-600"
  >
    Home
  </Link>

  <span>/</span>

  <Link
    to="/products"
    className="transition hover:text-pink-600"
  >
    Products
  </Link>

  <span>/</span>

  <span className="font-medium text-gray-800">
    {product.name}
  </span>
</nav>

    <Link
  to="/products"
  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-pink-600"
    >
  ← Back to Products
    </Link>

        {/* Product image gallery */}
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src=""
              alt="Product"
               className="h-72 w-full object-cover"
            />
          </div>

          <div>
            {/* Additional product thumbnails */}
          </div>
        </div>

    <div>
        <h1>Product Name</h1>

        <p>Product price ETB</p>

     <div>
        <span>★★★★★</span>
        <span>(Rating | Reviews)</span>
     </div>

    <button type="button">
         Order Now
    </button>
</div>

        {/* Product description */}

    
<div>
  <h2>Description</h2>

  <p>
    Product description will appear here.
  </p>

  <ul>
    <li>Materials</li>
    <li>Size and length</li>
    <li>Care instructions</li>
  </ul>
</div>


        {/* Color options */}

        
<div>
  <h2>Color:</h2>

  <div>
    {[
      { name: "Purple", className: "bg-purple-500" },
      { name: "Pink", className: "bg-pink-400" },
      { name: "White", className: "bg-white" },
      { name: "Black", className: "bg-gray-950" },
    ].map((color) => (
      <button
        key={color.name}
        type="button"
        aria-label={color.name}
        className={`h-8 w-8 rounded-full border ${color.className}`}
      />
    ))}
  </div>
</div>


        {/* Customer reviews */}

        
<div>
  <h2>Customer Reviews</h2>

  <button type="button">
    View all reviews
  </button>

  <div>
    <p>No reviews yet.</p>
  </div>
</div>

      </section>
    </main>
  );
}


export default ProductDetails;

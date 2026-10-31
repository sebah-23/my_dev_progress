
function ProductDetails() {
  return (
    <main>
      <section>
        {/* Product image gallery */}
        <div>
          <div>
            <img
              src=""
              alt="Product"
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
      </section>
    </main>
  );
}

export default ProductDetails;

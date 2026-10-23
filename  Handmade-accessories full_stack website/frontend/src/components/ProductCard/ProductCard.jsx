import product from '../../data/products.js';

function ProductCard({product}){
    return(

       <Link  to={`/products/${product.id}`} className="block rounded-lg transition-transform duration-200 hover:-translate-y-1">
      <div className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition'>
       <img src={product.image} alt={product.name}  className="w-full h-52 sm:h-60 md:h-64 object-cover"/>
       <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 "> {product.name} </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {product.category}
        </p>
       <p className="text-sm sm:text-base font-medium text-gray-800 mt-2">{product.price}ETB</p>
       </div>
      </div>
</Link>
    );


}

export default ProductCard;


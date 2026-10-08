import product from '../../data/products.js';

function ProductCard({product}){
    return(
      <div>
       <img src={product.image} alt={product.name}  className="w-full h-64 object-cover"/>
       <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 "> {product.name} </h3>
       <p className="text-base font-medium text-gray-800 mt-2">{product.price}ETB</p>
       </div>
      </div>

    );


}

export default ProductCard;


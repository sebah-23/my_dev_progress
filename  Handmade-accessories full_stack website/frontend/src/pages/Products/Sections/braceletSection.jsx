import products from  "../../../data/products";
import productGrid from "../../../components/ProductGrid"

function braceletSection(){

const bracelets = products.filter((product) => product.category.toLowerCase() === "bracelets");

return (

    <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-600"> Bracelets </h2>

        <productGrid products = {phoneCharms} />



    </section>

);

}

export default braceletSection;
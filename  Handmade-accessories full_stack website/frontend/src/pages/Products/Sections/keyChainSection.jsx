import products from  "../../../data/products";
import productGrid from "../../../components/ProductGrid"

function KeyChainSection(){

const keyChains = products.filter((product) => product.category.toLowerCase() === "key chains");

return (

    <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-600"> Key Chains </h2>

        <productGrid products = {keyChains} />



    </section>

);

}

export default KeyChainSection;
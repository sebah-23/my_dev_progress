import products from  "../../../data/products";
import productGrid from "../../../components/ProductGrid"

function PhoneCharmSection(){

const phoneCharms = products.filter((product) => product.category.toLowerCase() === "phone charms");

return (

    <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-600"> Phone charms </h2>

        <productGrid products = {phoneCharms} />



    </section>

);

}

export default PhoneCharmSection;
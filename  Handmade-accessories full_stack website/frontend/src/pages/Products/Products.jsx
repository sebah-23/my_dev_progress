import Header from "../../components/Header/Header";

function Products() {
  return (
   
    <>
    <Header />
    <main className="px-4 py-12 sm:px-6 lg:px-12 bg-gray-100">
      <div className="mb-8 mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 sm:text-3xl">Products</h2>
        <p className="text-sm text-gray-600 mt-2 sm:text-base">Explore our wide range of handmade accessories!</p>
      </div>
      {/* Add your product grid or list component here */}
    </main>
    </>
  );
}

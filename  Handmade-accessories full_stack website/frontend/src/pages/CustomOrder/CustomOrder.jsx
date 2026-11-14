function CustomOrder() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="mx-auto max-w-2xl">

        {/* Page Heading */}
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm text-amber-700">
            Made Just For You
          </p>

          <h1 className="mb-3 text-3xl font-semibold text-gray-800">
            Create Your Custom Piece
          </h1>

          <p className="text-gray-600">
            Have something special in mind?
            Customize your favorite handmade accessory
            and let us bring your idea to life.
          </p>
        </header>

        {/* Custom Order Form */}
        <form className="space-y-5 rounded-lg bg-white p-6">

          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="mb-2 block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Type your full name"
              required
              className="w-full rounded border border-gray-300 p-3 outline-none focus:border-amber-600"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="mb-2 block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Type your phone number"
              required
              className="w-full rounded border border-gray-300 p-3 outline-none focus:border-amber-600"
            />
          </div>

          {/* Product Type */}
          <div>
            <label htmlFor="product" className="mb-2 block text-gray-700">
              Product Type
            </label>
            <select
              id="product"
              name="product"
              required
              className="w-full rounded border border-gray-300 bg-white p-3 outline-none focus:border-amber-600"
            >
              <option value="">Choose product</option>
              <option value="Bracelet">Bracelet</option>
              <option value="phone-charm">Phone Charm</option>
              <option value="key-chain">Key Chain</option>
            </select>
          </div>

          {/* Color and Size */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="color" className="mb-2 block text-gray-700">
                Select Color
              </label>
              <input
                type="color"
                id="color"
                name="color"
                defaultValue="#b58b65"
                className="h-12 w-full cursor-pointer rounded border border-gray-300 p-1"
              />
            </div>

            <div>
              <label htmlFor="size" className="mb-2 block text-gray-700">
                Select Size
              </label>
              <select
                id="size"
                name="size"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 outline-none focus:border-amber-600"
              >
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="mb-2 block text-gray-700">
              Upload Photo (Optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>                                                                                                                                                                                           {/* Additional Note */}
          <div>
            <label htmlFor="note" className="mb-2 block text-gray-700">
              Additional Note
            </label>
            <textarea
              id="note"
              name="note"
              rows="4"
              placeholder="Write any special request"
              className="w-full rounded border border-gray-300 p-3 outline-none focus:border-amber-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              name="submit_order"
              className="w-full rounded bg-gray-800 p-3 text-white hover:bg-amber-700"
            >
              Place Order
            </button>

            <p className="mt-3 text-center text-sm text-gray-500">
              We will contact you by phone to confirm your custom order.
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}

export default CustomOrder;
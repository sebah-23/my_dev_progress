function CustomOrder() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

      <div className="mx-auto w-full max-w-2xl">

        {/* Page Heading */}
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm text-amber-700">
            Made Just For You
          </p>

          <h1 className="w-full rounded bg-gray-800 p-3 text-sm text-white transition-colors hover:bg-amber-700 sm:text-base">
            Create Your Custom Piece
          </h1>

          <p className="mx-auto max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            Have something special in mind?
            Customize your favorite handmade accessory
            and let us bring your idea to life.
          </p>
        </header>

        {/* Custom Order Form */}
        <form className="space-y-5 rounded-lg bg-white p-4 sm:p-6 md:p-8">

          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="mb-2 block text-sm text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Type your full name"
              required
              className="w-full rounded border border-gray-300 p-3 text-sm outline-none focus:border-amber-600 sm:text-base"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Type your phone number"
              required
              className="w-full rounded border border-gray-300 p-3 text-sm outline-none focus:border-amber-600 sm:text-base"
            />
          </div>

          {/* Product Type */}
          <div>
            <label htmlFor="product" className="mb-2 block text-sm text-gray-700">
              Product Type
            </label>
            <select
              id="product"
              name="product"
              required
              className="w-full rounded border border-gray-300 bg-white p-3 text-sm outline-none focus:border-amber-600 sm:text-base"
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
              <label htmlFor="color" className="mb-2 block text-sm text-gray-700">
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
              <label htmlFor="size" className="mb-2 block text-sm text-gray-700">
                Select Size
              </label>
              <select
                id="size"
                name="size"
                required
                className="w-full rounded border border-gray-300 bg-white p-3 text-sm outline-none focus:border-amber-600 sm:text-base"
              >
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

          </div>

          {/* Image Upload */}                                                                                                                                                              <div>
            <label htmlFor="image" className="mb-2 block text-sm text-gray-700">
              Upload Photo (Optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full rounded border border-gray-300 p-2 text-sm"
            />
          </div>

          {/* Additional Note */}
          <div>
            <label htmlFor="note" className="mb-2 block text-sm text-gray-700">
              Additional Note
            </label>
            <textarea
              id="note"
              name="note"
              rows="4"
              placeholder="Write any special request"
              className="w-full rounded border border-gray-300 p-3 text-sm outline-none focus:border-amber-600 sm:text-base"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              name="submit_order"
              className="w-full rounded bg-gray-800 p-3 text-sm text-white hover:bg-amber-700 sm:text-base"
            >
              Place Order
            </button>

            <p className="mt-3 text-center text-xs text-gray-500 sm:text-sm">
              We will contact you by phone to confirm your custom order.
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}

export default CustomOrder;
function CustomOrder() {
  return (
    <main>
      <div>
        {/* Page Heading */}
        <header>
          <p>Made Just For You</p>

          <h1>Create Your Custom Piece</h1>

          <p>
            Have something special in mind?
            Customize your favorite handmade accessory
            and let us bring your idea to life.
          </p>
        </header>

        {/* Custom Order Form */}

       <form >
        <div >
        <label for="fullname">Full Name</label>
        <input type="text" name="fullname" placeholder="Type your full name" required/>
        </div>
         <div >
        <label for="phone">Phone Number</label>
        <input type="text" name="phone" placeholder="Type your Phone number" required/>
        </div>
         <div >
        <label for="product">Product Type</label>
        <select name="product"  required>
            <option value="">choose product</option>
            <option value="Bracelet">Bracelet</option>
            <option value="phone-charm">Phone Charm</option>
            <option value="key-chain">Key chain</option>
        </select>
        </div>
          <div >
        <label for="color">Select Color</label>
        <input type="color" name="color" required/>
       
        </div>
         <div >
        <label for="size">Product Type</label>
        <select name="size"  required>
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>
        </div>
        <div >
            <label for="image"> Upload photo(optional)</label>
            <input type="file" name="image"/>
        </div>
        <div>
            <label for="note"> Additional Note</label>
            <textarea name="note" id="" placeholder="write any special request" ></textarea>
        </div>
        <button type="submit"  name="submit_order">Place Order</button>
        <p >We will contact you by phone to confirm your customer order.</p>
        </form>
           
      </div>
    </main>
  );
}

export default CustomOrder;
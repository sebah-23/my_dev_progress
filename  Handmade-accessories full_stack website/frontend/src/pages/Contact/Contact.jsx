
function Contact() {
  return (
    <main>
      <div>

        {/* Page Heading */}
        <header>
          <p>Get In Touch</p>

          <h1>Contact Us</h1>

          <p>
            Have a question or need help?
            We'd love to hear from you.
            Feel free to reach out to us.
          </p>
        </header>


{/* Contact Information */}
<section>
  <h2>Contact Information</h2>

  <div>
    <h3>Email Address</h3>
    <p>Zemuni@gmail.com</p>
  </div>

  <div>
    <h3>Phone Number</h3>
    <p>+251 993 507 413</p>
  </div>

  <div>
    <h3>Location</h3>
    <p>Addis Ababa, Ethiopia</p>
  </div>
</section>

       
{/* Contact Form */}
<section>
  <h2>Send Us a Message</h2>

  <form>
    <div>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div>
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter message subject"
        required
      />
    </div>

    <div>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Write your message..."
        required
      ></textarea>
    </div>

    <button type="submit">
      Send Message
    </button>
  </form>
</section>


      </div>
    </main>
  );
}

export default Contact;

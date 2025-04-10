const Contact = () => {
    return (
      <div className="py-8 md:py-16 px-8 text-center">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you. Drop us a message!
        </p>
  
        <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-4 text-left border-black border">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 "
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows={5}
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
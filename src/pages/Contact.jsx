import React from "react";

function Contact() {
  return (
    <div id="contact" className="max-w-5xl mx-auto p-10 bg-white shadow-lg mt-10 rounded-lg">
      {/* Contact Form & Info Container */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h2>
          <form action="https://formspree.io/f/mgveeddr" method="POST" className="space-y-4">
            
            <div className="flex flex-col">
              <label htmlFor="firstName" className="font-medium">First Name</label>
              <input 
                type="text" 
                name="First Name" 
                id="firstName" 
                required 
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-medium">Last Name</label>
              <input 
                type="text" 
                name="Last Name" 
                id="lastName" 
                required 
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">Email</label>
              <input 
                type="email" 
                name="Email" 
                id="email" 
                required 
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-medium">Message</label>
              <textarea 
                name="Message" 
                id="message" 
                required 
                rows="4"
                className="border border-gray-300 p-2 rounded-lg w-full"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>

          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700">Email: ebic20877@gmail.com</p>
          <p className="text-lg text-gray-700">Phone: +233550538536</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;

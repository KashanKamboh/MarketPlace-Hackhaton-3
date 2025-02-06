import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-3xl max-w-6xl w-full overflow-hidden">
          {/* Left Side - Form */}
          <div className="flex-1 p-6 lg:p-12">
            <h2 className="text-3xl text-gray-900">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <p className="text-sm text-gray-900 mt-4 leading-relaxed">
              Have a specific inquiry or looking to explore new opportunities? Our
              experienced team is ready to engage with you.
            </p>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/meoorzbn"
              method="POST"
              className="space-y-6 mt-8"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your message:
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md px-4 py-3 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent mt-1"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-gray-700 hover:bg-gray-800 tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Side - Map */}
          <div className="flex-1">
            <iframe
              src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[300px] lg:min-h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;

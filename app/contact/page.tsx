// pages/contact.tsx
import React from 'react';
import Head from 'next/head';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';

interface Expert {
  name: string;
  role: string;
  imageUrl: string;
}

const experts: Expert[] = [
  { name: "Niranjan Sharma", role: "Project Manager", imageUrl: "/image/navbar/contact/Niranjan Sharma.png" },
  { name: "Pracas Upreti", role: "CTO", imageUrl: "/image/navbar/contact/Pracas Upreti.png" },
  { name: "Nadan Tamang", role: "Information Manager", imageUrl: "/image/navbar/contact/Madan Tamang.png" },
];

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | GardenSewa</title>
      </Head>

      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <div className="relative w-full h-[300px] sm:h-[350px] flex items-center justify-center text-white">
          <img
            src="/image/gallery/galleryBg.jpg"
            alt="Green plant background"
            className="absolute inset-0 z-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-10 max-w-3xl text-center px-4">
            <div className="mb-3 text-sm text-gray-300">
              Home &gt; <span className="text-green-400">Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              We’re here to help your garden grow smoothly. Whether you have questions,
              feedback, or want to partner with us, feel free to reach out.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-20 relative z-10">
          <div className="bg-[#F3FFF2] rounded-3xl shadow-lg flex flex-col lg:flex-row overflow-hidden border border-gray-100">

            {/* Left Column - Contact Info */}
    <div className="bg-gradient-to-r from-[#43963A] to-[#009000] text-white p-8 sm:p-8 lg:p-8 m-4 sm:m-6 rounded-3xl w-full lg:w-1/2 flex flex-col justify-center items-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-centers">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { title: 'Email', value: 'support@gardensewa.com', icon: '/image/icons/email.png' },
                  { title: 'Phone', value: '+977 97XXXXXXXX', icon: '/image/icons/phone.png' },
                  { title: 'Office Hours', value: 'Mon - Fri\n9:00 AM - 5:00 PM', icon: '/image/icons/calendar.svg' },
                  { title: 'Location', value: 'Maitidevi, Kathmandu', icon: '/image/icons/location.png' },
                ].map((item, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="bg-white text-black rounded-full p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-4">
                      <img src={item.icon} alt={item.title} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white text-light p-8 sm:p-8 lg:p-8 m-4 sm:m-6 w-full lg:w-2/3 rounded-3xl flex justify-center items-center">
              <form className="space-y-6 w-full max-w-md">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name..."
                      className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address..."
                      className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number..."
                      className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-green-500 mt-1"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-secondary transition shadow-md flex items-center space-x-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <section className="container mx-auto max-w-7xl mb-12 sm:mb-16 px-0 sm:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary mb-6 sm:mb-8">
              Our Location
            </h2>
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.0493883767512!2d85.3226278695138!3d27.711186085795504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1754747091169!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </section>

          {/* Our Experts */}
          <section className="container mx-auto max-w-7xl px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary mb-6 sm:mb-8">
              Our Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-4 py-8 sm:py-12 bg-white rounded-2xl transition-transform transform hover:scale-105 border border-gray-200"
                >
                  <img
                    src={expert.imageUrl}
                    alt={expert.name}
                    className="lg:w-44 lg:h-44 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <p className="text-sm text-dark bg-green-50 rounded-lg p-2 font-medium mb-2 sm:mb-4">
                      {expert.role}
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-dark">
                      {expert.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

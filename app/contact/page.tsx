// pages/contact.tsx
import React from "react";
import Head from "next/head";
import { User, Mail, Phone, ArrowRight, Globe, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface Expert {
  name: string;
  role: string;
  imageUrl: string;
}

const experts: Expert[] = [
  {
    name: "Niranjan Sharma",
    role: "Project Manager",
    imageUrl: "/image/navbar/contact/Niranjan Sharma.png",
  },
  {
    name: "Pracas Upreti",
    role: "CTO",
    imageUrl: "/image/navbar/contact/Pracas Upreti.png",
  },
  {
    name: "Nadan Tamang",
    role: "Information Manager",
    imageUrl: "/image/navbar/contact/Madan Tamang.png",
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col gap-27 items-center justify-center w-full">
        {/* Header Section */}

        <div
          className={`relative w-full h-[360px] flex items-center justify-center text-white mb-20`}
        >
          <img
            src="/image/navbar/contact/contactImag.png"
            alt="A large green plant"
            height={400}
            width={400}
            className="absolute inset-0 z-0 object-cover h-90 w-full"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
              {/* Breadcrumb navigation */}
              <div className="mb-4 text-sm w-full">
                <span className="text-light flex items-center justify-center text-[#616161] text-base">
                  Home <ChevronRight width={20} height={20} />
                  <span className="text-primary ml-2 font-semibold">
                    Contact Us
                  </span>
                </span>
              </div>

              {/* Section title */}
              <h1 className="mb-4 text-5xl font-bold text-white md:text- [52px]">
                Contact Us
              </h1>

              {/* Section description */}
              <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
                We’re here to help your garden grow smoothly. Whether you have
                questions, feedback, or want to partner with us, feel free to
                reach out.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white min-h-screen flex items-center justify-center p-4">
          <div className="flex w-full max-w-7xl bg-white">
            {/* Left Column - Contact Information */}
            <div className="w-1/2 pr-16 py-8 mt-10 flex flex-col">
              <h1 className="text-5xl font-bold text-secondary mb-8">
                Contact Information
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                If you have any questions or need further assistance, please
                feel free to reach out to us. We are committed to providing you
                with the best service and support. Your satisfaction is our
                priority.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-4 mr-6">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 text-lg">
                      gardensewa@sriyog.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-4 mr-6">
                    <Phone className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-lg">9852025735</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-4 mr-6">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Website Link
                    </h3>
                    <a
                      href="https://gardensewa.com"
                      className="text-body hover:underline text-lg"
                    >
                      https://gardensewa.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-4 mr-6">
                    <MapPin className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Kamalpokhari, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-[638px] flex justify-center items-center py-8">
              <div className="rounded-3xl p-12 w-full  border border-card-stroke-light ">
                <div className="space-y-3">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-body mb-3"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <User className="h-6 w-6 text-body" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name..."
                        className="w-full h-14 pl-12 pr-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-body mb-3"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Mail className="h-6 w-6 text-body" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address..."
                        className="w-full h-14 pl-12 pr-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-semibold text-body mb-3"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Phone className="h-6 w-6 text-body" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number..."
                        className="w-full h-14 pl-12 pr-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors text-lg"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-body mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors resize-none text-lg"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <button className="px-10 py-4  bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:from-[#007000] hover:via-[#007800] hover:to-[#00A400] text-white font-semibold rounded-full transition-colors duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl text-lg">
                      <span>Send Message</span>
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
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

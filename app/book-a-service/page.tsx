"use client";
import React, { useState } from 'react';
import Head from 'next/head';

// Type definitions for form state
interface FormData {
  email: string;
  phone: string;
  scheduledDate: string;
  province: string;
  city: string;
  wardNo: string;
  detailedAddress: string;
  price: string;
  customPrice: string;
  serviceType: string;
  notes: string;
  isConfidential: boolean;
}

// A reusable component for a text input field
const FormInput: React.FC<{
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ label, name, type = 'text', value, onChange, required = false }) => (
  <div className="flex flex-col space-y-1">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
    />
  </div>
);

// A reusable component for a select dropdown
const FormSelect: React.FC<{
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}> = ({ label, name, value, onChange, options, required = false }) => (
  <div className="flex flex-col space-y-1">
    <label htmlFor={name} className="text-sm font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white"
    >
      <option value="" disabled>Select...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

// Main page component
const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    scheduledDate: '',
    province: '',
    city: '',
    wardNo: '',
    detailedAddress: '',
    price: '3452',
    customPrice: '',
    serviceType: '',
    notes: '',
    isConfidential: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // In a real app, you would send this data to an API
    alert('Form submitted successfully! Check the console for the data.');
  };

  return (
    <> {/* Header section */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-12 text-center bg-green-50">
    {/* Breadcrumb navigation */}
    <div className="mb-4 text-sm w-full">
      <span className="text-light">
        Home &gt;
        <span className="text-primary">Book a Service</span>
      </span>
    </div>

    {/* Section title */}
    <h1 className="mb-4 text-5xl font-bold text-primary md:text-6xl">
      Book a Gardening Service
    </h1>
  </div>
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Head>
        <title>Book a Service</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200">

        {/* Form container */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </section>

          {/* Scheduled Date section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Scheduled Date</h2>
            <FormInput
              label="Scheduled Date"
              name="scheduledDate"
              type="date"
              value={formData.scheduledDate}
              onChange={handleChange}
              required
            />
          </section>

          {/* Location Details section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Location Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormSelect
                label="Province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                options={['Province 1', 'Province 2', 'Province 3']}
                required
              />
              <FormSelect
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                options={['Kathmandu', 'Janakpur', 'Pokhara']}
                required
              />
              <FormInput
                label="Ward No"
                name="wardNo"
                value={formData.wardNo}
                onChange={handleChange}
                required
              />
            </div>
            <FormInput
              label="Detailed Address"
              name="detailedAddress"
              value={formData.detailedAddress}
              onChange={handleChange}
              required
            />
          </section>

          {/* Service Details section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Service Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="price" className="text-sm font-medium text-gray-700">
                  Price<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center mt-1">
                  <div className="relative flex-grow">
                    <input
                      type="range"
                      id="price"
                      name="price"
                      min="1000"
                      max="10000"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="absolute -bottom-6 left-0 text-xs text-gray-500">NPR. 1000</span>
                    <span className="absolute -bottom-6 right-0 text-xs text-gray-500">NPR. 10000</span>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-medium text-primary">
                      NPR. {formData.price}
                    </span>
                  </div>
                </div>
              </div>
              <FormInput
                label="Custom Price"
                name="customPrice"
                type="number"
                value={formData.customPrice}
                onChange={handleChange}
              />
            </div>
            <FormSelect
              label="Service Type"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              options={['Lawn Care', 'Gardening', 'Landscaping']}
              required
            />
          </section>

          {/* Additional Details section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Additional Details</h2>
            <div className="flex flex-col space-y-1">
              <label htmlFor="notes" className="text-sm font-medium text-gray-700">
                Notes or Special Requests
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Mention tools required, preferred gardener, plant types, etc."
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              />
            </div>
          </section>

          {/* Confirmation and Submit button */}
          <div className="flex flex-col items-start space-y-4 pt-4">
            <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="isConfidential"
                checked={formData.isConfidential}
                onChange={handleChange}
                className="h-4 w-4 text-white focus:ring-primary border-gray-300 rounded accent-primary"
              />
              <span>
                Your details are kept confidential. We use your information only to coordinate your gardening service.
              </span>
            </label>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default BookingPage;

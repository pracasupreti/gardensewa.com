"use client";
import Head from 'next/head';
import { useState } from 'react';

const HomePage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    emailAddress: '',
    phoneNumber: '',
    province: '',
    city: '',
    wardNo: '',
    detailedAddress: '',
    businessType: '',
    projectDetails: '',
    confidentiality: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Head>
        <title>Join Us</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-full px-4 py-12 text-center bg-green-50">
    {/* Breadcrumb navigation */}
    <div className="mb-4 text-sm w-full">
      <span className="text-light">
        Home &gt;
        <span className="text-primary">Become a client</span>
      </span>
    </div>

    {/* Section title */}
    <h1 className="mb-4 text-5xl font-bold text-primary md:text-5xl">
      Become a client
    </h1>
  </div>

      <main className="min-h-screen bg-gray-50 font-sans">
        {/* Header Section */}
        <header className="bg-white py-16 text-center">
          <h1 className="text-4xl font-bold text-primary mb-12">Why Join Us?</h1>
          <div className="flex justify-center space-x-6 px-4">
            <FeatureCard
              title="Expert Consultation"
              description="Professional plant selection and space planning"
              icon="/image/icons/send.svg"/>
            <FeatureCard
              title="Maintenance Services"
              description="Regular care and maintenance to keep plants thriving"
              icon="/image/icons/screw.svg"/>
            <FeatureCard
              title="Custom Solutions"
              description="Tailored plant arrangements for your specific needs"
              icon="/image/icons/bulb.svg"/>
          </div>
        </header>

        {/* Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-10">
              Tell us about your business
            </h2>

            <form onSubmit={handleSubmit}>
              <FormSectionTitle title="Company Information" />
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <FormInput label="Company Name" name="companyName" type="text" value={formData.companyName} onChange={handleChange} required />
                <FormInput label="Contact Person" name="contactPerson" type="text" value={formData.contactPerson} onChange={handleChange} required />
                <FormInput label="Email Address" name="emailAddress" type="email" value={formData.emailAddress} onChange={handleChange} required />
                <FormInput label="Phone Number" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required />
              </div>

              <FormSectionTitle title="Company Address" />
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <FormSelect label="Province" name="province" value={formData.province} onChange={handleChange}>
                  <option value="">Select Province</option>
                  <option value="province1">Province 1</option>
                  <option value="province2">Province 2</option>
                </FormSelect>
                <FormSelect label="City" name="city" value={formData.city} onChange={handleChange}>
                  <option value="">Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </FormSelect>
                <FormInput label="Ward No" name="wardNo" type="text" value={formData.wardNo} onChange={handleChange} />
              </div>
              <div className="mb-8">
                <FormInput label="Detailed Address" name="detailedAddress" type="text" value={formData.detailedAddress} onChange={handleChange} />
              </div>

              <FormSectionTitle title="Business Details" />
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <FormInput label="Business Type" name="businessType" type="text" value={formData.businessType} onChange={handleChange} />
                <FormTextarea label="Project Details" name="projectDetails" value={formData.projectDetails} onChange={handleChange} />
              </div>

              <div className="flex items-start mb-8">
                <input
                  type="checkbox"
                  id="confidentiality"
                  name="confidentiality"
                  checked={formData.confidentiality}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="confidentiality" className="ml-2 block text-sm text-gray-900">
                  Your details are kept **confidential**. We use your information only to coordinate our customer list.
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;

// Reusable Components
const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-green-50 p-8 rounded-3xl text-center w-74 shadow-md">
    <div className="mx-auto h-12 w-12 p-2 rounded-full bg-white flex items-center justify-center mb-4">
      <img src={icon} alt={title} />
    </div>
    <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FormSectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2 mb-6">
    {title}
  </h3>
);

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({ label, name, type, value, onChange, required = false }: FormInputProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
);

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const FormSelect = ({ label, name, value, onChange, children }: FormSelectProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}*
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
    >
      {children}
    </select>
  </div>
);

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = ({ label, name, value, onChange }: FormTextareaProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={3}
      value={value}
      onChange={onChange}
      placeholder="Describe how why you want to be our client."
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
);
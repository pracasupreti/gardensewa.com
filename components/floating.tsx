import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Floating: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
     {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
        {/* Call Button */}
        <a
          href=" +977-9852025735"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
          aria-label="Call Us"
        >
          <FaPhoneAlt size={24} />
        </a>

        {/* WhatsApp Button */}
        <a
          href=" https://d.sriyog.com/gSewa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition duration-200"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default Floating;

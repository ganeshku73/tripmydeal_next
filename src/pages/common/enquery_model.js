// components/Modal.js
import {useState,React} from 'react';
import axios from "axios";
import API_BASE_URL from "@/config";


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [enquery, setEnquery]=useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquery({
      ...enquery,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic here
    try {
        
      const formDataToSend = new FormData();
      
      formDataToSend.append('name', enquery.name);
      formDataToSend.append('email', enquery.email);
      formDataToSend.append('phone', enquery.phone);
      formDataToSend.append('checkIn', enquery.checkIn);
      formDataToSend.append('checkOut', enquery.checkOut);
      formDataToSend.append('adults', enquery.adults);
      formDataToSend.append('message', enquery.message);
      
      var token = '';
      if (typeof localStorage !== "undefined") {
          token = localStorage.getItem('username');
        } else {
          token = '';
        }
      const response = await axios.post(`${API_BASE_URL}/enquery/add-enquery`,formDataToSend, 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
             
            }
          }
      );
      setSuccessMessage("Your enquiry has been successfully submitted!");
      setEnquery({}); // Reset form fields
      navigate('/');
    }catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server responded with error status:", error.response.status);
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something else happened while setting up the request
        console.error("Error:", error.message);
      }
  }


    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white py-2 px-8 rounded-lg z-50 w-full max-w-md">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-2">Hotel Booking Inquiry</h2>
        {successMessage && <div className="bg-green-100 text-green-700 p-4 rounded mb-4">{successMessage}</div>}
        {errorMessage && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{errorMessage}</div>}
                           
        <form onSubmit={handleSubmit} className="space-y-1">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                Check-in Date
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                Check-out Date
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
              Number of Adults
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

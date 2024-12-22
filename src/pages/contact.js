import { useState } from "react";
import Footer from "./common/footer";
import Header from "./common/header";
import axios from "axios";
import API_BASE_URL from "@/config";


function Contact() {
    const [enquery, setEnquery] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // For navigation after successful form submission

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEnquery({
            ...enquery,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage(""); // Clear previous messages
        setErrorMessage("");

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', enquery.name);
            formDataToSend.append('email', enquery.email);
            formDataToSend.append('phone', enquery.phone);
            formDataToSend.append('checkIn', enquery.checkIn);
            formDataToSend.append('checkOut', enquery.checkOut);
            formDataToSend.append('adults', enquery.adults);
            formDataToSend.append('message', enquery.message);

            let token = '';
            if (typeof localStorage !== "undefined") {
                token = localStorage.getItem('username');
            }
            alert(API_BASE_URL);
            await axios.post(`${API_BASE_URL}/enquery/add-enquery`, formDataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                   
                }
            });

            setSuccessMessage("Your enquiry has been successfully submitted!");
            setEnquery({}); // Reset form fields
            // Optionally navigate to another page
            // navigate('/');
        } catch (error) {
            setErrorMessage("There was an error submitting your enquiry. Please try again.");
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <section>
                <div className='container mx-auto'>
                    <div className="mt-3 items-center justify-center">
                        <div className="rounded-lg">
                            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                            <p className="text-gray-700 leading-relaxed">
                               Connect with us for package booking
                            </p>
                            <hr />
                            {successMessage && <div className="bg-green-100 text-green-700 p-4 rounded mb-4">{successMessage}</div>}
                            {errorMessage && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{errorMessage}</div>}
                            <form onSubmit={handleSubmit} className="w-full">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={enquery.name || ''}
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
                                        value={enquery.email || ''}
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
                                        value={enquery.phone || ''}
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
                                            value={enquery.checkIn || ''}
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
                                            value={enquery.checkOut || ''}
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
                                        value={enquery.adults || ''}
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
                                        value={enquery.message || ''}
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
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;

// src/components/SelectionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectionPage = () => {
    const navigate = useNavigate();

    const handleSellerClick = () => {
        navigate('/register/seller');

    };

    const handleBuyerClick = () => {
        navigate('/register/buyer');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">Select an Option</h1>
            <div className="flex space-x-4">
                <button
                    className="px-6 py-3 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    onClick={handleSellerClick}
                >
                    Seller
                </button>
                <button
                    className="px-6 py-3 text-lg text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                    onClick={handleBuyerClick}
                >
                    Buyer
                </button>
            </div>
        </div>
    );
};

export default SelectionPage;

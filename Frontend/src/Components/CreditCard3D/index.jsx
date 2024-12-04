import React from "react";
import { useEffect } from "react";

const CreditCard3D = ({ cardNumber, expiryDate, cardholderName }) => {

    return (
        <div className="flex justify-center items-center h-auto mb-10">
            <div className="perspective-1000">
                <div className="w-80 h-48 bg-black rounded-2xl shadow-xl transform hover:rotate-x-6 hover:rotate-y-6 hover:shadow-2xl transition-transform duration-500">
                    <div className="relative w-full h-full bg-black text-white rounded-2xl p-6">
                        {/* MasterCard logo */}
                        <div className="absolute top-4 left-4 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                            >
                                <circle cx="9" cy="12" r="4" />
                                <circle cx="15" cy="12" r="4" />
                            </svg>
                        </div>

                        {/* Card number */}
                        <div className="absolute top-20 left-6 right-6">
                            <p className="font-bold text-2xl tracking-wider">{cardNumber}</p>
                        </div>

                        {/* Expiration and Cardholder */}
                        <div className="absolute bottom-6 left-6 flex justify-between w-full text-xs">
                            <p>Exp: {expiryDate}</p>
                        </div>

                        {/* Card brand */}
                        <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                            <p className="font-semibold">MasterCard</p>
                        </div>

                        {/* Cardholder Name */}
                        <div className="absolute bottom-4 left-6 text-sm text-gray-400">
                            <p className="font-semibold">{cardholderName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard3D;

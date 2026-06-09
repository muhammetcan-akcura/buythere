import React from 'react';
import Link from 'next/link';

const RefundPolicy = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24 lg:px-8">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Refund Policy</h1>
                </div>

                {/* INTRO */}
                <div className="mb-12 bg-blue-50 p-8 rounded-2xl">
                    <p className="text-lg text-gray-700">
                        At Buythere Limited, we strive to provide the best digital services to our customers. Please read our refund policy carefully to understand your rights and our procedures.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="space-y-8">

                    {/* Digital Services Notice */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Important Notice:</span> The services you get are digital services/products, hence after placing an order you get instant activation to service and are ready to be used.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Refund Conditions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Full Refund - Non Delivery */}
                        <div className="bg-white border-2 border-green-200 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Full Refund</h3>
                            <p className="text-gray-700 mb-4">Non-Delivery of Service</p>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-700">
                                    If you did not get the delivery, you can issue a full refund. You need to inform us within <span className="font-semibold text-green-600">48 hours</span> of order placed time to be eligible.
                                </p>
                            </div>
                        </div>

                        {/* Full Refund - Not As Described */}
                        <div className="bg-white border-2 border-blue-200 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Full Refund</h3>
                            <p className="text-gray-700 mb-4">Service Not As Described</p>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-700 mb-2">
                                    If your delivered service is not like as described, you can issue a full refund within <span className="font-semibold text-blue-600">48 hours</span>.
                                </p>
                                <p className="text-xs text-red-600 font-semibold mt-2">
                                    * If there is any kind of usage by the user after the order on the SaaS app, we hold the right to decline the refund.
                                </p>
                            </div>
                        </div>

                        {/* Partial Refund */}
                        <div className="bg-white border-2 border-orange-200 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Partial Refund</h3>
                            <p className="text-gray-700 mb-4">Service Not Working</p>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <p className="text-sm text-gray-700 mb-2">
                                    If the purchased service/tools are not working for more than <span className="font-semibold text-orange-600">48 hours</span>, you can issue a partial refund for remaining days of your monthly subscription.
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    We offer replacement with similar tool to maintain your workflow.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Refund Timeline */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4 flex-1">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Timeline</h2>
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>It can take up to <span className="font-semibold text-purple-600">2-15 working days</span> to process your refund.</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>You will receive the refund to the <span className="font-semibold">original account</span> from where you were debited.</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>If you paid through your card/net banking, you will receive the refund on your Card/Bank account.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How to Request a Refund */}
                    <div className="bg-gray-900 text-dark p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
                        <p className="mb-6">To request a refund, please contact us through one of the following methods:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           
                            <a href="mailto:info@buythere.com" className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 p-4 rounded-xl flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Email Us</p>
                                    <p className="text-sm text-gray-300">info@buythere.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Important Information */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                        <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Important Information
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>All refund requests must be submitted within 48 hours of order placement.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Refunds will only be processed to the original payment method used.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Any usage of the service after purchase may affect your eligibility for a refund.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Buythere Limited reserves the right to decline refund requests that do not meet the stated criteria.</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
                      
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
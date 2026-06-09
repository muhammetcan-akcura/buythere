"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQData {
    question: string;
    answer: string;
}

const faqData: FAQData[] = [
        {
            question: "How long does it take to see SEO results?",
            answer: "SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 3–6 months. The exact timeline depends on your website’s current state, competition, and the aggressiveness of your strategy."
        },
        {
            question: "Do you guarantee first-page rankings?",
            answer: "We don’t guarantee specific rankings as search engines constantly update their algorithms. However, we use data-driven strategies and industry best practices to significantly improve your rankings and maintain steady progress over time."
        },
        {
            question: "What makes your SEO agency different?",
            answer: "We focus on transparent and ethical SEO practices backed by clear reporting and communication. Our strategies are custom-built for each client’s goals, emphasizing sustainable, long-term results rather than risky short-term fixes."
        },
        {
            question: "How much does SEO cost?",
            answer: "Our pricing depends on your goals, business type, and current website status. We offer tailored SEO packages to fit your needs and provide transparent quotes after understanding your objectives and requirements."
        },
        {
            question: "What is included in your Marketing Services?",
            answer: "Our marketing services cover everything you need to build and grow your online presence — from social media management and SEO optimization to content strategy and paid advertising. We use data-driven campaigns to attract the right audience and convert them into loyal customers."
        },
        {
            question: "How long does it take to see results from marketing campaigns?",
            answer: "Results depend on your goals and marketing channels. For social media and ad campaigns, you can usually see measurable results within 2–4 weeks, while SEO and growth-focused strategies may take 2–3 months for full effect."
        },
        {
            question: "How long does it take to design and build a website?",
            answer: "The timeline depends on project complexity. A basic website typically takes 1–2 weeks, while a custom-designed, feature-rich site can take 3–6 weeks. We provide clear timelines and progress updates to ensure transparency and efficiency."
        },
        {
            question: "Will my website be mobile-friendly and SEO optimized?",
            answer: "Absolutely! Every website we build is fully responsive across all devices and follows core on-page SEO best practices, including fast loading speed, clean code, and optimized meta tags — helping your site perform better on Google from day one."
        },
        {
            question: "Which platforms do you run advertising campaigns on?",
            answer: "We manage ad campaigns across all major platforms including Google Ads, Meta (Facebook & Instagram), TikTok Ads, YouTube, and LinkedIn. Based on your business goals, we select the most effective mix of platforms to maximize reach, engagement, and conversions."
        },
        {
            question: "How do you measure the success of advertising campaigns?",
            answer: "We track key performance metrics like CTR (Click-Through Rate), CPC (Cost Per Click), Conversion Rate, and ROI (Return on Investment). Detailed analytics dashboards and performance reports show exactly how your campaigns are performing and where improvements are made."
        }
    
    
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="bg-transparent">
            <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24 lg:px-8">
                
                {/* HEADER */}
                <div className="text-center mb-14">
                    <h3 className="text-4xl lg:text-5xl font-semibold">Frequently Asked Questions</h3>
                    <p className="text-lg text-beach font-normal mt-4">
                        Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, feel free to reach out.
                    </p>
                </div>

                {/* FAQ ITEMS */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            {/* QUESTION */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold pr-8">
                                    {item.question}
                                </span>
                                <div className={`transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </button>

                            {/* ANSWER */}
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-beach leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CONTACT CTA */}
                <div className="text-center mt-12">
                    <p className="text-beach mb-4">Still have questions?</p>
                    <button className="bg-purple text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
                        Contact Us
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
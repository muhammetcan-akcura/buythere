"use client"

import { useState } from "react"

interface ServiceData {
    title: string
    price: string
    priceNum: number
    features: string[]
    category: string
}

const servicesData: ServiceData[] = [

    {
        category: "Marketing Packages",
        title: "Micro Launch",
        price: "$100",
        priceNum: 100,
        features: [
            "Brand identity audit & quick-fix recommendations",
            "2 custom social media post designs",
            "Hashtag strategy for 1 platform",
            "Audience persona definition",
            "7-day engagement boost plan"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Startup Boost",
        price: "$250",
        priceNum: 250,
        features: [
            "Full social profile optimization (bio, links, visuals)",
            "14-day content calendar creation",
            "5 branded post designs",
            "Competitor gap analysis",
            "Story & reel strategy guide",
            "Monthly progress snapshot"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Marketing Starter",
        price: "$500",
        priceNum: 500,
        features: [
            "30-day social media content plan",
            "10 premium graphic designs",
            "Platform-specific growth strategy",
            "Influencer outreach shortlist",
            "Basic paid ad setup (1 platform)",
            "Bi-weekly performance report",
            "24/7 Email Support"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Growth Accelerator",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "Full social media management for 30 days",
            "Ad campaigns on Meta + Google",
            "SEO optimization for 5 key pages",
            "Email marketing sequence (3 emails)",
            "Retargeting pixel setup",
            "Advanced audience segmentation",
            "Weekly 1-on-1 strategy call"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Business Expansion",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "2-month omnichannel content strategy",
            "Up to 8 ad campaigns (Meta, Google, TikTok)",
            "Landing page copywriting & CRO audit",
            "Live competitor tracking dashboard",
            "Full brand voice & visual guidelines",
            "Lead magnet creation",
            "Weekly performance review calls"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Scale Pro",
        price: "$3,000",
        priceNum: 3000,
        features: [
            "3-month data-driven content roadmap",
            "Cross-platform ad management & optimization",
            "Advanced A/B testing on creatives & copy",
            "Marketing funnel build (TOFU–BOFU)",
            "Custom KPI dashboard & monthly deep-dive reports",
            "Influencer collaboration strategy",
            "Dedicated account strategist"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Enterprise Plus",
        price: "$4,000",
        priceNum: 4000,
        features: [
            "Full corporate brand strategy & positioning",
            "CRM integration & automated lead nurturing",
            "Full-site technical SEO overhaul",
            "High-budget multi-channel ad management",
            "PR & media outreach planning",
            "Custom analytics & attribution setup",
            "Monthly strategy board presentations"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Enterprise Domination",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "360° multi-platform marketing ecosystem",
            "AI-powered audience targeting & optimization",
            "Advanced SEO for 10+ pages + schema markup",
            "Full CRM build & marketing automation flows",
            "Video ad production coordination",
            "Custom executive reporting dashboard",
            "Dedicated senior account manager"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Web Design Starter",
        price: "$500",
        priceNum: 500,
        features: [
            "Up to 3 fully responsive pages",
            "Modern UI design tailored to your brand",
            "Mobile-first & cross-browser optimized",
            "On-page SEO foundations (meta, headers)",
            "Inquiry/contact form integration",
            "7-day express delivery"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Professional Website",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "Up to 6 custom-designed pages",
            "Bespoke UI/UX with smooth micro-animations",
            "CMS integration (easy content editing)",
            "SEO-ready HTML structure & meta setup",
            "Social media & analytics integration",
            "1-month post-launch maintenance"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Business Growth",
        price: "$1,500",
        priceNum: 1500,
        features: [
            "Up to 8 professionally designed pages",
            "Blog system with category & tag structure",
            "Core Web Vitals & page speed optimization",
            "Google Analytics 4 & Search Console setup",
            "Lead capture forms with email automation",
            "1-month of ongoing content updates"
        ]
    },
    {
        category: "Web Design Packages",
        title: "E-Commerce Pro",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "Up to 10 product & category pages",
            "Conversion-focused store design",
            "Secure payment gateway integration",
            "Product search, filters & wishlist",
            "Inventory & order management system",
            "1-month free post-launch support"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Creative Studio Website",
        price: "$2,500",
        priceNum: 2500,
        features: [
            "Up to 10 visually rich custom pages",
            "Premium animations & scroll-triggered effects",
            "Portfolio gallery with lightbox & filtering",
            "Headless CMS integration",
            "WebP image optimization & lazy loading",
            "1.5-month maintenance & content updates"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Corporate Identity Site",
        price: "$3,500",
        priceNum: 3500,
        features: [
            "Up to 12 brand-aligned pages",
            "Custom design system & component library",
            "Admin dashboard with full CMS control",
            "Advanced performance & Core Web Vitals tuning",
            "Team profiles, careers & investor sections",
            "1.5-month dedicated maintenance plan"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Premium Web Experience",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "Up to 15 fully custom pages",
            "Award-level UI/UX design & prototyping",
            "Full-stack development (Next.js / React)",
            "Third-party API & webhook integrations",
            "Multilingual & multi-currency support",
            "2-month dedicated maintenance & updates"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Enterprise Digital Suite",
        price: "$8,000",
        priceNum: 8000,
        features: [
            "Unlimited pages with scalable architecture",
            "Bespoke UI/UX with GSAP motion design",
            "CRM, ERP & custom API integrations",
            "Enterprise-grade security & SSL setup",
            "Dedicated project manager & QA team",
            "3-month premium support & SLA guarantee"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Starter Advertising",
        price: "$500",
        priceNum: 500,
        features: [
            "1 ad platform setup (Google or Meta)",
            "1 campaign with 3 creative ad variations",
            "Targeted keyword & interest research",
            "Conversion-focused ad copywriting",
            "Pixel/tag installation & conversion tracking",
            "14-day campaign optimization cycle"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Growth Advertising",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "2 ad platforms (Google + Meta)",
            "3 campaigns with 10 ad creatives",
            "Lookalike & custom audience building",
            "A/B split testing on copy & creatives",
            "Retargeting funnel setup",
            "Bi-weekly optimization & reporting"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Business Expansion",
        price: "$1,500",
        priceNum: 1500,
        features: [
            "Google & Meta full campaign management",
            "Up to 5 active campaigns",
            "Custom audience & geo-targeting",
            "Smart ad budget pacing & management",
            "Landing page conversion recommendations",
            "Weekly ROAS performance reports"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Advanced Advertising",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "3 ad platforms with unified strategy",
            "6 campaigns + 20 creative assets",
            "Full-funnel awareness-to-conversion strategy",
            "Landing page A/B testing coordination",
            "In-depth competitor ad intelligence",
            "Priority 24/7 dedicated support"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Brand Awareness Boost",
        price: "$2,500",
        priceNum: 2500,
        features: [
            "Multi-platform brand awareness campaigns",
            "Video ads, display banners & native ads",
            "Advanced demographic & psychographic targeting",
            "Professional ad copywriting & creative design",
            "Weekly creative A/B testing cycles",
            "Brand lift measurement & reporting"
        ]
    },
    {
        category: "Advertising Packages",
        title: "E-Commerce Performance",
        price: "$3,500",
        priceNum: 3500,
        features: [
            "Google Shopping + Performance Max campaigns",
            "Meta dynamic product ad catalogs",
            "Dynamic retargeting for cart abandoners",
            "Product feed optimization & titles",
            "ROAS-focused bidding strategy management",
            "Dedicated e-commerce ad specialist"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Premium Advertising Suite",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "4 platforms: Google, Meta, TikTok, LinkedIn",
            "Full-funnel campaign architecture",
            "Video, display, search & native ad formats",
            "Deep competitor & market share analysis",
            "In-house creative production team",
            "2-month hands-on optimization & scaling"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Enterprise Marketing Accelerator",
        price: "$8,000",
        priceNum: 8000,
        features: [
            "All major ad platforms with unified management",
            "Unlimited campaigns & creative iterations",
            "AI-powered bid management & audience signals",
            "Custom attribution model & funnel design",
            "Senior ad strategist + dedicated designer",
            "3-month premium support with weekly calls"
        ]
    }, {
        category: "SEO Packages",
        title: "Basic",
        price: "$100",
        priceNum: 100,
        features: [
            "Targeted keyword research (20 keywords)",
            "Title tags, meta descriptions & header optimization",
            "Google Search Console & Analytics setup",
            "Google Business Profile optimization"
        ]
    },
    {
        category: "SEO Packages",
        title: "Starter",
        price: "$200",
        priceNum: 200,
        features: [
            "In-depth keyword research (30 keywords)",
            "Full on-page SEO optimization",
            "Image alt-text & internal linking strategy",
            "Google Business Profile optimization",
            "Top 5 competitor SERP analysis",
            "Bi-weekly ranking & traffic reports"
        ]
    },
    {
        category: "SEO Packages",
        title: "Standard",
        price: "$500",
        priceNum: 500,
        features: [
            "Strategic keyword research (40 keywords)",
            "Advanced on-page & metadata optimization",
            "Technical SEO audit & issue fixes",
            "Core Web Vitals analysis & recommendations",
            "Competitor gap & backlink analysis",
            "Weekly ranking progress reports"
        ]
    },
    {
        category: "SEO Packages",
        title: "Plus",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "Power keyword research (40 keywords)",
            "Full on-page & schema markup optimization",
            "Deep technical SEO audit & fix implementation",
            "2 SEO-optimized blog articles per month",
            "Backlink profile audit & disavow",
            "Google Business Profile management",
            "Monthly authority-building content strategy"
        ]
    },
    {
        category: "SEO Packages",
        title: "Advanced",
        price: "$1,500",
        priceNum: 1500,
        features: [
            "Comprehensive keyword research (50 keywords)",
            "Full technical SEO overhaul",
            "3 SEO articles + 1 pillar page per month",
            "Local SEO & Google Business optimization",
            "Structured data & rich snippet setup",
            "Competitor content gap exploitation",
            "Monthly authority growth reporting"
        ]
    },
    {
        category: "SEO Packages",
        title: "Pro",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "Advanced keyword research (60 keywords)",
            "Complete on-page & technical SEO management",
            "4 premium SEO articles per month",
            "White-hat link building (5 links/month)",
            "E-E-A-T optimization & trust signals",
            "Conversion-focused page optimization",
            "Monthly in-depth performance reporting"
        ]
    },
    {
        category: "SEO Packages",
        title: "Premium",
        price: "$2,500",
        priceNum: 2500,
        features: [
            "Deep keyword research (70 keywords)",
            "Site-wide SEO audit & continuous optimization",
            "5 long-form SEO articles per month",
            "Link building campaign (8 links/month)",
            "Featured snippet & People Also Ask targeting",
            "International/multilingual SEO setup",
            "Monthly strategy call & custom reporting"
        ]
    },
    {
        category: "SEO Packages",
        title: "Ultra",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "Enterprise keyword research (80 keywords)",
            "Full technical & architectural SEO management",
            "8 premium articles + content hub development",
            "Aggressive link building (15 links/month)",
            "Digital PR & brand mention campaigns",
            "Programmatic SEO for scale",
            "Dedicated SEO strategist & analyst"
        ]
    },
    {
        category: "SEO Packages",
        title: "Max",
        price: "$7,500",
        priceNum: 7500,
        features: [
            "Dominance keyword research (90 keywords)",
            "Full-site SEO infrastructure management",
            "12 expert articles + topic cluster strategy",
            "Authority link building (30 links/month)",
            "Competitor outranking battle plan",
            "Video SEO & YouTube optimization",
            "Executive monthly board-ready reports"
        ]
    },
    {
        category: "SEO Packages",
        title: "Ultimate",
        price: "$10,000",
        priceNum: 10000,
        features: [
            "Full-spectrum keyword domination (100 keywords)",
            "Enterprise technical SEO & site architecture",
            "16 premium content assets per month",
            "Aggressive link building (60 links/month)",
            "Full digital PR & thought leadership strategy",
            "AI-assisted content & ranking optimization",
            "Dedicated senior SEO director & team"
        ]
    },
];


const PaymentMethodModal = ({
    service,
    onClose,
    onSelectStripe,
    onSelectPayoneer,
    onSelectWise,
}: {
    service: ServiceData
    onClose: () => void
    onSelectStripe: () => void
    onSelectPayoneer: () => void
    onSelectWise: () => void
}) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    padding: "32px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}
                >
                    <div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>Select Payment Method</h3>
                        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                            Choose how you want to pay for {service.title}
                        </p>
                    </div>
                    <button onClick={onClose} style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <button
                        onClick={onSelectStripe}
                        style={{
                            width: "100%",
                            padding: "20px",
                            border: "2px solid #e5e7eb",
                            borderRadius: "12px",
                            backgroundColor: "white",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#9333ea"
                            e.currentTarget.style.backgroundColor = "#f9fafb"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e5e7eb"
                            e.currentTarget.style.backgroundColor = "white"
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#f3e8ff",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "24px", height: "24px", color: "#9333ea" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </div>
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "4px" }}>Stripe</h4>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>Pay instantly with credit card (6% Fee)</p>
                        </div>
                        <svg
                            style={{ width: "20px", height: "20px", color: "#9ca3af" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <button
                        onClick={onSelectPayoneer}
                        style={{
                            width: "100%",
                            padding: "20px",
                            border: "2px solid #e5e7eb",
                            borderRadius: "12px",
                            backgroundColor: "white",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#9333ea"
                            e.currentTarget.style.backgroundColor = "#f9fafb"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e5e7eb"
                            e.currentTarget.style.backgroundColor = "white"
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#fef3c7",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "24px", height: "24px", color: "#f59e0b" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "4px" }}>Payoneer</h4>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>Manual payment via WhatsApp (4% Fee)</p>
                        </div>
                        <svg
                            style={{ width: "20px", height: "20px", color: "#9ca3af" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <button
                        onClick={onSelectWise}
                        style={{
                            width: "100%",
                            padding: "20px",
                            border: "2px solid #e5e7eb",
                            borderRadius: "12px",
                            backgroundColor: "white",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#9333ea"
                            e.currentTarget.style.backgroundColor = "#f9fafb"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e5e7eb"
                            e.currentTarget.style.backgroundColor = "white"
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#e2ff66",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "24px", height: "24px", color: "#111827" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "4px" }}>Wise</h4>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>Fast and secure international transfer (4% Fee)</p>
                        </div>
                        <svg
                            style={{ width: "20px", height: "20px", color: "#9ca3af" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const PayoneerContactModal = ({ service, onClose }: { service: ServiceData; onClose: () => void }) => {
    const whatsappNumber = "905523568756" // Replace with your WhatsApp number
    const message = `Hi, I'm interested in the ${service.title} package (${service.price}) and would like to pay via Payoneer.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    padding: "32px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}
                >
                    <div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>Contact Us for Payoneer Payment</h3>
                        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                            We&apos;ll guide you through the manual payment process
                        </p>
                    </div>
                    <button onClick={onClose} style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div style={{ backgroundColor: "#f9fafb", padding: "20px", borderRadius: "12px", marginBottom: "24px" }}>
                    <h4 style={{ fontWeight: 600, color: "#111827", marginBottom: "12px" }}>Selected Package</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ color: "#6b7280" }}>{service.title}</span>
                        <span style={{ fontWeight: 600, color: "#9333ea" }}>{service.price}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "12px" }}>
                        Click the button below to contact us via WhatsApp. We&apos;ll provide you with our Payoneer details and guide you
                        through the payment process.
                    </p>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        width: "100%",
                        backgroundColor: "#25D366",
                        color: "white",
                        fontWeight: 600,
                        padding: "16px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "none",
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#20BA5A"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#25D366"
                    }}
                >
                    <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contact Us on WhatsApp
                </a>

                <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "16px" }}>
                    Our team will respond within 24 hours
                </p>
            </div>
        </div>
    )
}

const WiseContactModal = ({ service, onClose }: { service: ServiceData; onClose: () => void }) => {
    const whatsappNumber = "905523568756" // Replace with your WhatsApp number
    const message = `Hi, I'm interested in the ${service.title} package (${service.price}) and would like to pay via Wise.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    padding: "32px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}
                >
                    <div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>Contact Us for Wise Payment</h3>
                        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                            We&apos;ll guide you through the manual payment process
                        </p>
                    </div>
                    <button onClick={onClose} style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div style={{ backgroundColor: "#f9fafb", padding: "20px", borderRadius: "12px", marginBottom: "24px" }}>
                    <h4 style={{ fontWeight: 600, color: "#111827", marginBottom: "12px" }}>Selected Package</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ color: "#6b7280" }}>{service.title}</span>
                        <span style={{ fontWeight: 600, color: "#9333ea" }}>{service.price}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "12px" }}>
                        Click the button below to contact us via WhatsApp. We&apos;ll provide you with our Wise details and guide you
                        through the payment process.
                    </p>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        width: "100%",
                        backgroundColor: "#25D366",
                        color: "white",
                        fontWeight: 600,
                        padding: "16px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "none",
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#20BA5A"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#25D366"
                    }}
                >
                    <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contact Us on WhatsApp
                </a>

                <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "16px" }}>
                    Our team will respond within 24 hours
                </p>
            </div>
        </div>
    )
}

const CheckoutModal = ({ service, onClose }: { service: ServiceData; onClose: () => void }) => {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const [cardNumber, setCardNumber] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvc, setCvc] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const serviceFee = service.priceNum * 0.06
    const totalAmount = service.priceNum + serviceFee

    const handleCardChange = (value: string) => {
        const clean = value.replace(/\s/g, "")
        const formatted = clean.match(/.{1,4}/g)?.join(" ") || clean
        setCardNumber(formatted.slice(0, 19))
    }

    const handleExpiryChange = (value: string) => {
        const clean = value.replace(/\D/g, "")
        const formatted = clean.length >= 2 ? `${clean.slice(0, 2)}/${clean.slice(2, 4)}` : clean
        setExpiry(formatted)
    }

    const handleCvcChange = (value: string) => {
        setCvc(value.replace(/\D/g, "").slice(0, 3))
    }

    const isStep1Valid = name.length > 0 && email.includes("@")
    const isStep2Valid = cardNumber.replace(/\s/g, "").length === 16 && expiry.length === 5 && cvc.length === 3

    const handlePayment = async () => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading(false)
        setSuccess(true)
        setTimeout(() => onClose(), 3000)
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                {success ? (
                    <div style={{ padding: "32px", textAlign: "center" }}>
                        <div
                            style={{
                                margin: "0 auto 16px",
                                width: "64px",
                                height: "64px",
                                backgroundColor: "#dcfce7",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "32px", height: "32px", color: "#16a34a" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>
                            Payment Successful!
                        </h3>
                        <p style={{ color: "#6b7280" }}>
                            Your order for <span style={{ fontWeight: 600 }}>{service.title}</span> has been confirmed.
                        </p>
                    </div>
                ) : (
                    <>
                        <div style={{ padding: "24px", borderBottom: "1px solid #e5e7eb" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                    <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>{service.title}</h3>
                                    <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{service.category}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}
                                >
                                    <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
                                <div style={{ display: "flex", alignItems: "center", color: step >= 1 ? "#9333ea" : "#9ca3af" }}>
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: step >= 1 ? "#9333ea" : "#e5e7eb",
                                            color: step >= 1 ? "white" : "#6b7280",
                                        }}
                                    >
                                        1
                                    </div>
                                    <span style={{ marginLeft: "8px", fontSize: "14px", fontWeight: 500 }}>Contact</span>
                                </div>
                                <div style={{ flex: 1, height: "2px", backgroundColor: "#e5e7eb", margin: "0 16px" }}></div>
                                <div style={{ display: "flex", alignItems: "center", color: step >= 2 ? "#9333ea" : "#9ca3af" }}>
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: step >= 2 ? "#9333ea" : "#e5e7eb",
                                            color: step >= 2 ? "white" : "#6b7280",
                                        }}
                                    >
                                        2
                                    </div>
                                    <span style={{ marginLeft: "8px", fontSize: "14px", fontWeight: 500 }}>Payment</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "24px" }}>
                            {step === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: "#374151",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{
                                                width: "100%",
                                                padding: "8px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                fontSize: "16px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: "#374151",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                width: "100%",
                                                padding: "8px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                fontSize: "16px",
                                            }}
                                        />
                                    </div>
                                    <button
                                        onClick={() => setStep(2)}
                                        disabled={!isStep1Valid}
                                        style={{
                                            width: "100%",
                                            background: "linear-gradient(to right, #9333ea, #2563eb)",
                                            color: "white",
                                            fontWeight: 600,
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "none",
                                            cursor: isStep1Valid ? "pointer" : "not-allowed",
                                            opacity: isStep1Valid ? 1 : 0.5,
                                        }}
                                    >
                                        Continue to Payment
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: "#374151",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            value={cardNumber}
                                            onChange={(e) => handleCardChange(e.target.value)}
                                            style={{
                                                width: "100%",
                                                padding: "8px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                fontSize: "16px",
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: "#374151",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                Expiry
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onChange={(e) => handleExpiryChange(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "8px 16px",
                                                    border: "1px solid #d1d5db",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: "#374151",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                CVC
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                value={cvc}
                                                onChange={(e) => handleCvcChange(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "8px 16px",
                                                    border: "1px solid #d1d5db",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ backgroundColor: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
                                        <h4 style={{ fontWeight: 600, color: "#111827", marginBottom: "12px" }}>Order Summary</h4>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "14px",
                                                marginBottom: "8px",
                                            }}
                                        >
                                            <span style={{ color: "#6b7280" }}>Service Price</span>
                                            <span style={{ fontWeight: 500 }}>{service.price}</span>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "14px",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <span style={{ color: "#6b7280" }}>Service Fee (6%)</span>
                                            <span style={{ fontWeight: 500 }}>${serviceFee.toFixed(2)}</span>
                                        </div>
                                        <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "8px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span style={{ fontWeight: 600, color: "#111827" }}>Total</span>
                                                <span style={{ fontWeight: 700, color: "#9333ea", fontSize: "18px" }}>
                                                    ${totalAmount.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <button
                                            onClick={() => setStep(1)}
                                            style={{
                                                flex: 1,
                                                backgroundColor: "#e5e7eb",
                                                color: "#374151",
                                                fontWeight: 600,
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handlePayment}
                                            disabled={!isStep2Valid || loading}
                                            style={{
                                                flex: 1,
                                                background: "linear-gradient(to right, #9333ea, #2563eb)",
                                                color: "white",
                                                fontWeight: 600,
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                cursor: !isStep2Valid || loading ? "not-allowed" : "pointer",
                                                opacity: !isStep2Valid || loading ? 0.5 : 1,
                                            }}
                                        >
                                            {loading ? "Processing..." : `Pay $${totalAmount.toFixed(2)}`}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

const PricingPage = () => {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null)
    const [showPaymentMethod, setShowPaymentMethod] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const [showPayoneerContact, setShowPayoneerContact] = useState(false)
    const [showWiseContact, setShowWiseContact] = useState(false)
    const categories = Array.from(new Set(servicesData.map((s) => s.category)))

    const handleGetStarted = (service: ServiceData) => {
        setSelectedService(service)
        setShowPaymentMethod(true)
    }

    const handleSelectStripe = () => {
        setShowPaymentMethod(false)
        setShowCheckout(true)
    }

    const handleSelectPayoneer = () => {
        setShowPaymentMethod(false)
        setShowPayoneerContact(true)
    }

    const handleSelectWise = () => {
        setShowPaymentMethod(false)
        setShowWiseContact(true)
    }

    const handleCloseAll = () => {
        setSelectedService(null)
        setShowPaymentMethod(false)
        setShowCheckout(false)
        setShowPayoneerContact(false)
        setShowWiseContact(false)
    }

    return (
        <div id="pricing" style={{ background: "var(--warm-white)", padding: "96px 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <p style={{
                        fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em",
                        textTransform: "uppercase", color: "#6B7280", marginBottom: 12
                    }}>Pricing</p>
                    <h2 style={{
                        fontSize: "clamp(2rem, 4vw, 2.8rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        color: "#111827",
                        marginBottom: 14,
                        lineHeight: 1.2,
                    }}>
                        Simple, transparent pricing
                    </h2>
                    <p style={{ fontSize: "1rem", color: "#6B7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                        Choose the package that fits your needs. All plans include a 6% service fee processed at checkout.
                    </p>
                </div>

                {categories.map((category, catIndex) => (
                    <div key={catIndex} style={{ marginBottom: "80px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
                            <span style={{
                                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                                textTransform: "uppercase", color: "#3B5FDB",
                                background: "#EEF2FF", padding: "5px 12px",
                                borderRadius: 100, border: "1px solid #DDE5FF"
                            }}>
                                {category}
                            </span>
                            <div style={{ flex: 1, height: 1, background: "var(--border-soft)" }} />
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {servicesData
                                .filter((service) => service.category === category)
                                .map((service, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: "#fff",
                                            border: "1px solid #E5E7EB",
                                            borderRadius: "16px",
                                            padding: "28px 24px",
                                            display: "flex",
                                            flexDirection: "column",
                                            transition: "all 0.22s ease",
                                            cursor: "default",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#3B5FDB"
                                            e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,95,219,0.10)"
                                            e.currentTarget.style.transform = "translateY(-4px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#E5E7EB"
                                            e.currentTarget.style.boxShadow = "none"
                                            e.currentTarget.style.transform = "translateY(0)"
                                        }}
                                    >
                                        {/* Top accent line */}
                                        <div style={{
                                            position: "absolute", top: 0, left: 24, right: 24,
                                            height: 2, background: "linear-gradient(90deg, #3B5FDB, #6B8EF5)",
                                            borderRadius: "0 0 4px 4px",
                                            opacity: 0.6
                                        }} />

                                        {/* Title + price */}
                                        <div style={{ marginBottom: 20 }}>
                                            <h3 style={{
                                                fontSize: "1rem", fontWeight: 600,
                                                color: "#374151", marginBottom: 10,
                                                letterSpacing: "-0.01em"
                                            }}>
                                                {service.title}
                                            </h3>
                                            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                                                <span style={{
                                                    fontSize: "2rem", fontWeight: 700,
                                                    color: "#111827", letterSpacing: "-0.04em"
                                                }}>
                                                    {service.price}
                                                </span>
                                                <span style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>/ project</span>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div style={{ height: 1, background: "#F3F4F6", marginBottom: 20 }} />

                                        {/* Features */}
                                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                                            {service.features.map((feature, i) => (
                                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                    <div style={{
                                                        flexShrink: 0, marginTop: 2,
                                                        width: 16, height: 16,
                                                        borderRadius: "50%",
                                                        background: "#EEF2FF",
                                                        display: "flex", alignItems: "center", justifyContent: "center"
                                                    }}>
                                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                                            <path d="M1.5 4.5l2 2 4-4" stroke="#3B5FDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <span style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.5 }}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA button */}
                                        <button
                                            onClick={() => handleGetStarted(service)}
                                            style={{
                                                width: "100%",
                                                background: "#111827",
                                                color: "white",
                                                fontWeight: 600,
                                                fontSize: "0.875rem",
                                                padding: "11px 16px",
                                                borderRadius: "10px",
                                                border: "none",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                                letterSpacing: "-0.01em",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "#3B5FDB"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "#111827"
                                            }}
                                        >
                                            Get started →
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedService && showPaymentMethod && (
                <PaymentMethodModal
                    service={selectedService}
                    onClose={handleCloseAll}
                    onSelectStripe={handleSelectStripe}
                    onSelectPayoneer={handleSelectPayoneer}
                    onSelectWise={handleSelectWise}
                />
            )}

            {selectedService && showCheckout && <CheckoutModal service={selectedService} onClose={handleCloseAll} />}

            {selectedService && showPayoneerContact && (
                <PayoneerContactModal service={selectedService} onClose={handleCloseAll} />
            )}

            {selectedService && showWiseContact && (
                <WiseContactModal service={selectedService} onClose={handleCloseAll} />
            )}
        </div>
    )
}

export default PricingPage
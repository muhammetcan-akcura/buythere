import Image from "next/image";

const whydata = [
    {
        heading: "Data-Driven Strategy",
        subheading: "Every plan is built on real analytics and performance metrics — not assumptions.",
    },
    {
        heading: "Transparent Reporting",
        subheading: "Clear, detailed reports so you always know exactly where your budget is going.",
    },
    {
        heading: "Long-Term Results",
        subheading: "We build sustainable growth that keeps your brand ahead — not just short-term spikes.",
    }
];

const Why = () => {
    return (
        <section id="about" style={{ background: "var(--cream)", padding: "80px 0" }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image col */}
                    <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
                        <Image
                            src="/assets/why/iPad.png"
                            alt="Why Buythere"
                            width={900}
                            height={600}
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </div>

                    {/* Text col */}
                    <div>
                        <p className="section-label">Why choose us</p>
                        <h2 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                            letterSpacing: "-0.025em",
                            lineHeight: 1.2,
                            color: "var(--slate-dark)",
                            marginBottom: 16
                        }}>
                            Results you can actually measure
                        </h2>
                        <p style={{ color: "var(--slate-soft)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 36 }}>
                            We combine proven SEO expertise with creative digital strategies.
                            Everything we do is transparent, trackable and built to last.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                            {whydata.map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 16 }}>
                                    <div style={{
                                        flexShrink: 0,
                                        width: 40, height: 40,
                                        borderRadius: 10,
                                        background: "var(--accent-soft)",
                                        display: "flex", alignItems: "center", justifyContent: "center"
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M3 9l4.5 4.5L15 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 style={{ fontWeight: 600, fontSize: "1rem", color: "var(--slate-dark)", marginBottom: 4 }}>
                                            {item.heading}
                                        </h3>
                                        <p style={{ fontSize: "0.9rem", color: "var(--slate-soft)", lineHeight: 1.65 }}>
                                            {item.subheading}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Why;

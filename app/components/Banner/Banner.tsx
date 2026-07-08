"use client";
import Link from "next/link";
import Image from "next/image";

const stats = [
    { num: "500+", label: "Projects" },
    { num: "98%", label: "Satisfaction" },
    { num: "12+", label: "Countries" },
];

const Banner = () => {
    return (
        <section style={{ background: "var(--warm-white)", paddingTop: 80, paddingBottom: 0, overflow: "hidden" }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div style={{
                    display: "grid",
                    gap: "48px",
                    alignItems: "center",
                    minHeight: "calc(100vh - 80px)",
                    paddingBottom: 60,
                }}
                    className="grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* ── LEFT: TEXT ── */}
                    <div style={{ maxWidth: 560 }}>
                        {/* Tag */}
                        <div style={{ marginBottom: 28 }}>
                            <span style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "#F0F4FF",
                                color: "#3B5FDB",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                padding: "7px 16px",
                                borderRadius: 100,
                                border: "1px solid #DDE5FF"
                            }}>
                                <span style={{
                                    width: 6, height: 6, borderRadius: "50%",
                                    background: "#3B5FDB", display: "inline-block"
                                }} />
                                Digital Marketing & SEO Agency
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                            fontWeight: 700,
                            lineHeight: 1.15,
                            letterSpacing: "-0.03em",
                            color: "#111827",
                            marginBottom: 20,
                        }}>
                            Grow your brand<br />
                            with strategies<br />
                            <span style={{
                                background: "linear-gradient(135deg, #3B5FDB 0%, #6B8EF5 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}>
                                that actually work
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p style={{
                            fontSize: "1.05rem",
                            color: "#6B7280",
                            lineHeight: 1.75,
                            marginBottom: 36,
                            maxWidth: 460,
                        }}>
                            We help businesses grow their visibility, traffic and revenue
                            through tailored SEO, advertising and web design —
                            built on data, not guesswork.
                        </p>

                        {/* CTAs */}
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                            <Link href="/#pricing" className="btn-primary">
                                View Packages
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link href="/contact-us" className="btn-secondary">
                                Talk to us
                            </Link>
                        </div>

                        {/* Stats */}

                    </div>

                    {/* ── RIGHT: VISUAL ── */}
                    <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}
                        className="hidden lg:flex"
                    >
                        {/* Background blob */}
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            right: -40,
                            transform: "translateY(-50%)",
                            width: 520,
                            height: 520,
                            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                            background: "linear-gradient(145deg, #EEF2FF 0%, #E0E8FF 100%)",
                            zIndex: 0,
                        }} />

                        {/* Dashboard image card */}
                        <div style={{
                            position: "relative",
                            zIndex: 1,
                            background: "#fff",
                            borderRadius: 20,
                            boxShadow: "0 24px 80px rgba(59, 95, 219, 0.12), 0 8px 32px rgba(0,0,0,0.06)",
                            overflow: "hidden",
                            maxWidth: 480,
                            width: "100%",
                            border: "1px solid rgba(0,0,0,0.05)",
                        }}>
                            {/* Fake browser bar */}
                            <div style={{
                                padding: "12px 16px",
                                background: "#F8F9FA",
                                borderBottom: "1px solid #EAEAEA",
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            }}>
                                <div style={{ display: "flex", gap: 6 }}>
                                    {["#FF5F57","#FEBC2E","#28C840"].map((c, i) => (
                                        <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                                    ))}
                                </div>
                                <div style={{
                                    flex: 1,
                                    background: "#EAEAEA",
                                    borderRadius: 6,
                                    height: 22,
                                    marginLeft: 8,
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: 10,
                                    fontSize: "0.7rem",
                                    color: "#9CA3AF"
                                }}>
                                    dashboard.buythere.com
                                </div>
                            </div>

                            <Image
                                src="/assets/banner/dashboard.avif"
                                alt="Buythere dashboard"
                                width={900}
                                height={580}
                                style={{ width: "100%", height: "auto", display: "block" }}
                                priority
                            />
                        </div>

                        {/* Floating badge — top left of card */}
                        <div style={{
                            position: "absolute",
                            top: 40,
                            left: -24,
                            zIndex: 2,
                            background: "#fff",
                            borderRadius: 14,
                            padding: "12px 18px",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                            border: "1px solid var(--border-soft)",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: "#ECFDF5",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M3 10l4 4 8-8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>+143% Organic</p>
                                <p style={{ fontSize: "0.68rem", color: "#9CA3AF", marginTop: 1 }}>Traffic this month</p>
                            </div>
                        </div>

                        {/* Floating badge — bottom right */}
                        <div style={{
                            position: "absolute",
                            bottom: 60,
                            right: -20,
                            zIndex: 2,
                            background: "#fff",
                            borderRadius: 14,
                            padding: "12px 18px",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                            border: "1px solid var(--border-soft)",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: 10,
                                background: "#FFF7ED",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 2v14M4 7l5-5 5 5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>4.9★ Rating</p>
                                <p style={{ fontSize: "0.68rem", color: "#9CA3AF", marginTop: 1 }}>From 200+ clients</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;

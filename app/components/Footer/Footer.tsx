"use client";
import Link from "next/link";


const Footer = () => {
    return (
        <footer style={{ background: "var(--slate-dark)", color: "rgba(255,255,255,0.65)" }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

                    {/* Brand col */}
                    <div className="lg:col-span-1">
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <span style={{
                                fontFamily: "'Syne', sans-serif",
                                fontWeight: 800,
                                fontSize: "1.4rem",
                                color: "#fff",
                                letterSpacing: "-0.02em"
                            }}>
                                buy<span style={{ color: "#6B9BF2" }}>there</span>
                            </span>
                        </Link>
                        <p style={{ marginTop: 14, lineHeight: 1.75, fontSize: "0.9rem", maxWidth: 300 }}>
                            A full-service digital marketing agency helping brands grow through impactful advertising,
                            strategic SEO, and measurable results.
                        </p>
                        <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
                            <Link href="mailto:info@buythere.com"
                                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", padding: "7px 14px", background: "rgba(255,255,255,0.06)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s" }}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                            >
                                ✉ info@buythere.com
                            </Link>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
                            Navigation
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "/#services" },
                                { label: "Pricing", href: "/#pricing" },
                                { label: "About", href: "/#about" },
                                { label: "Contact", href: "/contact-us" },
                            ].map(item => (
                                <Link key={item.label} href={item.href}
                                    style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal + contact */}
                    <div>
                        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
                            Legal
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { label: "Terms of Service", href: "/terms-of-service" },
                                { label: "Privacy Policy", href: "/privacy-policy" },
                                { label: "Refund Policy", href: "/refund-policy" },
                            ].map(item => (
                                <Link key={item.label} href={item.href}
                                    style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div style={{ marginTop: 24 }}>
                            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>
                                Contact
                            </p>
                            <Link href="tel:+905523568756"
                                style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", display: "block", marginBottom: 6 }}>
                                +90 552 356 87 56
                            </Link>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                                128 City Road, London<br />EC1V 2NX, United Kingdom
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ paddingTop: 24, display: "flex", flexDirection: "column", gap: 4, alignItems: "center", textAlign: "center" }}>
                    <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}>
                        © {new Date().getFullYear()} Buythere Limited. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
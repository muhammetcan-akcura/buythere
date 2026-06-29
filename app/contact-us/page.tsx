import { Phone, MapPin, MessageCircle, Send, Building, User, Mail } from "lucide-react"

export default function ContactUs() {
    return (
        <div className="container mx-auto px-4 mb-52 py-12 max-w-4xl">
            <div className="border border-border rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 pb-6 border-b border-border">
                        <Building className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Company Name</h2>
                            <p className="text-muted-foreground">Buythere Limited</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 pb-6 border-b border-border">
                        <User className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Company Owner</h2>
                            <p className="text-muted-foreground">YILMAZ, KERIM</p>
                        </div>
                    </div>

                    {/* Adres */}
                    <div className="flex items-start gap-4 pb-6 border-b border-border">
                        <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Address (EN)</h2>
                            <p className="text-muted-foreground">
                            RM D5. S/F. KING YIP FACTORY BUILDING,<br />
                                NO. 59 KING YIP STREET,<br />
                                KBUN TONG HONG KONG
                            </p>
                        </div>
                    </div>

                    {/* Telefon */}
                    <div className="flex items-start gap-4 pb-6 border-b border-border">
                        <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Tel</h2>
                            <a href="tel:+905050428820" className="text-muted-foreground hover:text-foreground transition-colors">
                                +90 505 042 88 20
                            </a>
                        </div>
                    </div>

                    {/* Mesajlaşma Uygulamaları */}
                    <div className="flex items-start gap-4">
                        <MessageCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-4">Messages</h2>
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* WhatsApp Butonu */}
                                <a
                                    href="https://wa.me/905050428820"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

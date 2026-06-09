import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Buythere — Digital Marketing & SEO Agency',
  description: 'Buythere helps businesses grow with tailored SEO strategies, advertising campaigns, and web design. Data-driven results, not guesswork.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

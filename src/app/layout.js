import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./Components/Footer";
import Letsconnect from "./Components/Letconnect";
import Call from "./Components/Call";
import Script from "next/script";

// Load Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100"], // Add all the weights you need
  variable: "--font-poppins",
  display: "swap", // Ensures faster font loading
});

// Load GeistSans and GeistMono fonts locally
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:
    "Wahid Plastic: PVC Scrap Buyers & Suppliers | HDPE Water Tank Scrap | Grinding Experts",
  description:
    "Wahid Plastic buys and recycles PVC scrap, HDPE water tanks, and black color plastic. Based in Mumbra, Thane, Navi Mumbai, and other areas, we offer grinding services and supply across India, including Mumbai, Bangalore, Pune, Delhi, Hyderabad, and more.",
  icons: {
    icon: "/favicon.ico", // This is where Next.js will look for the favicon
  },
  keywords:
    "PVC scrap, HDPE water tank scrap, plastic recycling, plastic grinding, plastic buyers, PVC scrap Mumbai, plastic suppliers India",
  author: "Wahid Plastic",
  openGraph: {
    type: "website",
    title: "Wahid Plastic: PVC Scrap Buyers & Suppliers",
    description:
      "Wahid Plastic offers PVC scrap recycling and grinding services, buying scrap in Mumbai, Bangalore, Pune, Delhi, Hyderabad, and more.",
    images: ["/lg1.png"], // Replace with actual image URL
    url: "https://wahidplastics.vercel.app", // Your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahid Plastic: PVC Scrap Buyers & Suppliers",
    description:
      "PVC scrap buyers and suppliers across India. Contact Wahid Plastic for high-quality grinding and recycling services.",
    images: ["/lg1.png"], // Replace with actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        {/* Open Graph Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        {/* Twitter Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Letsconnect />
        <Footer />
        <Call />
        {/* Structured Data (JSON-LD) */}
        <Script type="application/ld+json" id="jsonld">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Wahid Plastic",
            description:
              "PVC scrap buyers and suppliers, providing plastic grinding services across India.",
            url: "https://wahidplastics.vercel.app",
            logo: "/lg1.png",
            sameAs: [
              "https://facebook.com/wahidplastic",
              "https://instagram.com/wahidplastic",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9819904574",
              contactType: "Customer Service",
            },
          })}
        </Script>
      </body>
    </html>
  );
}

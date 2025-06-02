import { Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/WhatsappButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Emphasis Architects",
  description: "Emphasis Architects is a design firm that specializes in creating sustainable and innovative architectural designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Navbar/>
        {children}
        <Footer/>
        <WhatsappButton/>
      </body>
    </html>
  );
}
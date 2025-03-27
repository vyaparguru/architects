

import { Gayathri } from "next/font/google";
import "./globals.css";

const gayathri = Gayathri({
  weight: ["100", "400", "700"], 
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
      <body
      className={gayathri.className}
      >
        {children}
      </body>
    </html>
  );
}

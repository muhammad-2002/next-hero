import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({subsets:['latin'],weight:['100','300','400','900']})
export const metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero"
  },
  description: "Supper PowerFull Next Js Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ `${roboto.className}`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

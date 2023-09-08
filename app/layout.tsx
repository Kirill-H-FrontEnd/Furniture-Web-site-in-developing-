// Styles
import "./styles/globals.scss";
// Next
import type { Metadata } from "next";
// Components
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CookieModal from "@/components/CookieModal/CookieModal";
import ToggleMenu from "@/components/ToggleMenu/ToggleMenu";
// Font
import { Open_Sans } from "next/font/google";
import HeaderContext from "@/providers/headerContext";

const font_text = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Furniture | Home",
  description: "This is home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" style={font_text.style}>
      <body className="">
        <div id="wrapper">
          <HeaderContext>
            <Header />
            <ToggleMenu />
          </HeaderContext>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

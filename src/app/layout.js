import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Mindtrack",
  description: "An app Where You can make write your self",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

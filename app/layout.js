import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Assignment 2",
  description: "Description of the assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

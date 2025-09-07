import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIH25008",
  description: "For SIH25008",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">Disaster Management</a>
            <div>
              <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Student Login</a>
              <a href="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Teacher Login</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

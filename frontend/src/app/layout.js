import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import AuthButtons from "./components/AuthButtons";
import FooterLinks from "./components/FooterLinks";

// Import local fonts instead of Google Fonts
import { geistSans, geistMono, inter } from "./fonts";

// Fallback system fonts in case font files are missing
const systemFonts = {
  sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

export const metadata = {
  title: "Disaster Management Platform | SIH25008",
  description: "A comprehensive disaster management platform for students and teachers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <ToastProvider>
        <AuthProvider>
        <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white font-bold text-xl tracking-tight">Disaster Management</span>
                </a>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
                  <a href="#" className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Resources</a>
                  <a href="#" className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</a>
                  <a href="#" className="text-white hover:bg-blue-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <AuthButtons />
              </div>
            </div>
          </div>
        </nav>
        
        <main className="fade-in slide-up">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Disaster Management</h3>
                <p className="text-gray-400">A comprehensive platform for disaster management education and training.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <FooterLinks />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Email: info@disastermanagement.edu</p>
                <p className="text-gray-400">Phone: +91 123-456-7890</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Disaster Management Platform. All rights reserved.</p>
            </div>
          </div>
        </footer>
        </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

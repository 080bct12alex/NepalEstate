// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Real Estate Price Prediction Of Kathmandu Valley',
  description: 'Modern real estate website with price prediction',
};

// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} NepalEstates. All rights reserved.</p>
          </div>
        </footer>
      </body>

    </html>
  );
}


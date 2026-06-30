import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BIOTERP — Full Spectrum CBD Tincture',
  description:
    'Premium full spectrum CBD tincture crafted to support balance, calm, and restful sleep. Manufactured in the USA.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

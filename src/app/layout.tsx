import QueryProvider from '../providers/QueryProvider';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  // metadataBase: new URL('http://localhost:3001'),
  metadataBase: new URL('https://travel-trucks-rgdh.vercel.app'),
  title: 'TravelTrucks',
  description:
    'Rent campers easily and explore travel options with TravelTrucks catalog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children} <Toaster position="top-right" />
        </QueryProvider>
      </body>
    </html>
  );
}

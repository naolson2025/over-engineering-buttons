import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Over Engineering Buttons',
  description: 'Doing Gods work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="autumn">
      <body>{children}</body>
    </html>
  );
}

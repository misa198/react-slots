import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import 'tailwindcss/tailwind.css';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Slots',
  description: 'A simple react component that uses slots to render children',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  );
}

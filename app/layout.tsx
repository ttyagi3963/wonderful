import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Frontend Technical Assessment',
  description: 'Mini Cart Challenge',
};

/**
 * Root layout component wrapping the application.
 * @param param.children The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-gray-50`}>
        <main className='max-w-6xl mx-auto p-6'>{children}</main>
      </body>
    </html>
  );
}

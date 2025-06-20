'use client';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/variables.css';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {

  const pathname = usePathname();

  if (pathname === '/auth') {
    return (
      <html lang="pt">
        <body>
          <main>
            <SessionProvider>
              {children}
            </SessionProvider>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="pt">
      <body>
        <SessionProvider>

          <header>
            <NavBar />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}

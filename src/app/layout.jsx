'use client';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/variables.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {

  const pathname = usePathname();

  if(pathname === '/auth') {
    return (
      <html lang="pt">
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  }

  return (
    <html lang="pt">
      <body>
        <header>
          <NavBar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/variables.css';

export default function RootLayout({ children }) {

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

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <header>
          <nav>Navbar Global</nav>
        </header>

        <main>{children}</main>

        <footer>Footer Global</footer>
      </body>
    </html>
  );
}

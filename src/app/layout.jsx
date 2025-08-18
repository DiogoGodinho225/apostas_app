'use client';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/variables.css';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { firaSans } from '@/utils/fonts';
import { LeaguesProvider } from '@/context/leaguesContext';
import { TeamsProvider } from '@/context/teamsContext';
import { BetsProvider } from '@/context/betsContext';
import { UserProvider } from '@/context/userContext';
import { StatisticsProvider } from '@/context/statisticsContext';

export default function RootLayout({ children }) {

  const pathname = usePathname();

  if (pathname === '/auth' || pathname === '/wallet') {
    return (
      <html className={firaSans.className} lang="pt">
        <body>
          <main className='blank-container'>
            <SessionProvider>
              <Toaster position="top-right"
                toastOptions={{
                  style: {
                    fontSize: '0.8vw',
                  }
                }}
              />
              {children}
            </SessionProvider>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html className={firaSans.className} lang="pt">
      <body>
        <SessionProvider>
          <UserProvider>
            <BetsProvider>
              <StatisticsProvider>
                <TeamsProvider>
                  <LeaguesProvider>
                    <Toaster position="top-right"
                      toastOptions={{
                        style: {
                          fontSize: '0.9vw',
                        }
                      }}
                    />
                    <header>
                      <NavBar />
                    </header>

                    <main className='principal-container'>{children}</main>

                    <footer>
                      <Footer />
                    </footer>
                  </LeaguesProvider>
                </TeamsProvider>
              </StatisticsProvider>
            </BetsProvider>
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

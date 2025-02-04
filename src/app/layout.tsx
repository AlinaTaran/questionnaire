import '../styles/globals.css';
import { Providers } from '../providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="flex items-center justify-center flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

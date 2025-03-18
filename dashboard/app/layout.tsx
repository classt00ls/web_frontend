import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClassTools.AI - Dashboard',
  description: 'Dashboard para usuarios de ClassTools.AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
} 
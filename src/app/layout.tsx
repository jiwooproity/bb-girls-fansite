import '@/shared/styles/globals.css';
import { Metadata } from 'next';

import { Header } from '@/widgets';
import { Aurora } from '@/shared/components';

export const metadata: Metadata = {
  title: 'BBGirls | Fansite',
  description: '브레이브걸스 팬사이트',
  icons: {
    icon: '/bbgirls-logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Aurora />
      </body>
    </html>
  );
}

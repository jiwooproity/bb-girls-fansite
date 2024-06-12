import '@/shared/styles/globals.css';

import { Header } from '@/widgets';
import { Aurora } from '@/shared/components';

export const metadata = {
  title: 'BBGirls | Fansite',
  description: '브레이브걸스 팬사이트',
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

import './globals.scss';

export const metadata = {
  title: 'Dancing on dangerous Portfolio.',
  description: 'Giovani Fouz Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

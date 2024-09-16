import '@/app/ui/global.css'
import {inter,amaranth} from '@/app/ui/font'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${amaranth.className} antialiased`}>{children}</body>
    </html>
  );
}

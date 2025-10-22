import "./globals.css";
import { Open_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`max-h-screen ${openSans.className}`}>{children}</body>
    </html>
  );
}

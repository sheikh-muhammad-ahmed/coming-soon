import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KheilKood – Never Cancel a Match Again",
  description:
    "Find players, book venues, and play more. The all-in-one global sports network for athletes everywhere.",
  keywords: [
    "sports",
    "futsal",
    "cricket",
    "book venues",
    "find players",
    "sports app",
    "sports network",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

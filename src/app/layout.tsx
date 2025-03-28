import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuki Suou | ID Discord Bot",
  description: "Lets Make Discord Server More Interesting and Attractive with Yuki Suou ID",
  openGraph: {
    type: 'website',
    url: 'https://yukisuou.xyz', // Replace with your actual domain
    title: "Yuki Suou | ID Discord Bot",
    description: "Lets Make Discord Server More Interesting and Attractive with Yuki Suou ID",
    images: [
      {
        url: 'https://yukisuou.xyz/images/web_image.png', // Replace with your actual image URL
        alt: 'Yuki Suou ID Discord Bot',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import { Inter } from "next/font/google";
import "@/styles/global.css";
import "@/styles/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "All Series and Films",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>{children}</body>
    </html>
  );
}

import { Hind_Siliguri, Poppins } from "next/font/google";
import "@/css/globals.css";
import { cn } from "@/lib/utils";

const hind = Hind_Siliguri({ subsets: ["bengali"], weight: ["400"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "কোর্সসমূহ - JLR",
  description: "Explore || Learn || Build || Share",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(hind.className, poppins.className)}>{children}</body>
    </html>
  );
}

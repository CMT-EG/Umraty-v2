import { Alexandria, Almarai } from "next/font/google";
import Providers from "@/global/providers/Providers";
import TopBar from "@/global/components/topBar/TopBar";
import "react-day-picker/dist/style.css";
import "@/global/styles/tailwind.css";
import "@/global/styles/globals.css";
import "@smastrom/react-rating/style.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
});
const almarai = Almarai({
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${alexandria.variable} ${almarai.variable} font-almarai antialiased min-h-svh flex flex-col items-stretch`}
      >
        <TopBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import { Alexandria, Almarai } from "next/font/google";
import Providers from "@/global/providers/Providers";
import TopBar from "@/app/(appLayout)/_blocks/topBar/TopBar";
import "react-day-picker/dist/style.css";
import "@/global/styles/tailwind.css";
import "@/global/styles/globals.css";
import "@smastrom/react-rating/style.css";
import NavBar from "@/app/(appLayout)/_blocks/navbar/NavBar";
import Footer from "@/app/(appLayout)/_blocks/footer/Footer";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${alexandria.variable} ${almarai.variable} font-almarai antialiased min-h-dvh flex flex-col items-stretch`}
      >
        <Providers>
          <TopBar />
          <NavBar variant="white" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

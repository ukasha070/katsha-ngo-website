/**
 * components
 */
import AlwaysOnDisplay from "@/components/AlwaysOnDisplay";
import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";
/**
 * store
 */
import { Providers } from "@/store/Provider";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <Navbar />
        {children}
        <Footer />
        <AlwaysOnDisplay />
      </Providers>
    </>
  );
}

/**
 * components
 */
import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";
import AlwaysOnDisplay from "@/components/AlwaysOnDisplay";

// utils
import { Providers } from "@/lib/Provider";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AlwaysOnDisplay />
      </Providers>
    </>
  );
}

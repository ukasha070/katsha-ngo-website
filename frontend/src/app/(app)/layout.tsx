/**
 * components
 */
import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

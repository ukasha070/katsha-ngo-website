/**
 * components
 */
import AlwaysOnDisplay from "@/components/AlwaysOnDisplay";

/**
 * store
 */
import { Providers } from "@/store/Provider";
import CustomNavbar from "@/components/header/CustomNavbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <CustomNavbar />
        {children}
        <AlwaysOnDisplay />
      </Providers>
    </>
  );
}

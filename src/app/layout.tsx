import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/footer";
import Header from "./_components/header";

export const metadata = {
  title: "Veronica - Cosmetologist",
  description: "Your favorite barber stylist / cosmetologist",
  icons: [
    { rel: "icon", url: "/favicon-16x16.png" },
    { rel: "icon", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#252525" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}

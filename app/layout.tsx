import "./globals.css";
import SideNav from "./layouts/SideNav";
import TopNav from "./layouts/TopNav";

export const metadata = {
  title: "Online Project Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <SideNav />
        <TopNav />
        {children}
      </body>
    </html>
  );
}

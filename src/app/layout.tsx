import { Navbar } from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
       <div><Navbar /></div>
       <div> {children}</div>
        <div className="mt-10"><Footer/></div>
      </body>
    </html>
  );
}

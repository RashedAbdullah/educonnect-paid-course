import { MainNav } from "@/components/header-footer/main-nav";
import { SiteFooter } from "@/components/header-footer/site-footer";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout({ children }) {
  const navLinks = [
    {
      title: "ফিচারস",
      href: "/#features",
    },
    {
      title: "প্রইসিং",
      href: "/pricing",
    },
    {
      title: "ব্লগ",
      href: "/blog",
    },
    {
      title: "ডকুমেন্টেশন",
      href: "/docs",
    },
  ];

  return (
    <html lang="en">
      <body>
        <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
          <div className="container flex h-20 items-center justify-between py-6 ">
            <MainNav items={navLinks} />
          </div>
        </header>

        <main className="flex-1 pt-20 flex flex-col">{children}</main>
        <Toaster richColors position="bottom-center" />
        <SiteFooter />
      </body>
    </html>
  );
}

import Head from "next/head";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ title, active, children, withFooter = true }) {
  useEffect(() => {
    document.body.setAttribute("data-page", active || "");
    // Ensure the body allows sticky positioning
    document.body.style.overflow = "visible";
    return () => document.body.removeAttribute("data-page");
  }, [active]);

  return (
    <div className="relative min-h-screen bg-brandDark">
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar active={active} />

      {/* Brand Light Leak */}
      <div className="fixed -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none z-0" />

      {/* WRAPPER: We use 'relative' and ensure no 'overflow-hidden' here.
          The sticky sidebar in ServicePage will now 'stick' relative to this main container.
      */}
      <main className="relative z-10">{children}</main>

      {withFooter && <Footer />}
    </div>
  );
}

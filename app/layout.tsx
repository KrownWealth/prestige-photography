import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared";
import { ThemeProvider } from "@/components/shared/Theme_Provider";

export const metadata: Metadata = {
  title: "Prestige Photography",
  description: "Capturing life's special moments ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
      try {
        if (localStorage.theme === 'light' || 
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
          document.documentElement.classList.remove('dark')
        }
      } catch (e) {}
    `,
        }} />
      </head>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

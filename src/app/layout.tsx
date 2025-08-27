// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/domains/shared/Navbar";
import { Footer } from "@/domains/shared/Footer";
import { AuthProvider } from "@/domains/auth/authProvider";

export const metadata = {
  title: "Pollify",
  description: "Create polls, vote in real-time, and share instantly.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

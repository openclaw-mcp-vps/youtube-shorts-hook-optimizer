import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Shorts Hook Optimizer – Maximize Retention in 3 Seconds",
  description:
    "AI-powered analysis of your YouTube Shorts first 3 seconds. Get actionable hook optimization suggestions to skyrocket viewer retention."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="554f060f-0ea6-4455-9c57-822c61c39c64"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

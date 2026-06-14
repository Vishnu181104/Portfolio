import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaya Vishnu | Claims Processor, Data Analyst & Business Development Professional",
  description:
    "Premium portfolio resume for Jaya Vishnu, a Claims Processor at Sagility with Data Analytics and Business Development experience in healthcare claims, Excel reporting, dashboard creation, CRM, lead generation, and data validation.",
  keywords: [
    "Claims Processor",
    "Healthcare Claims",
    "Insurance Claims",
    "Data Analyst",
    "Excel",
    "Reporting",
    "Dashboard Creation",
    "Business Development",
    "Sales Executive",
    "Lead Generation",
    "Customer Relationship Management",
    "Data Cleaning",
    "Data Validation",
    "Problem Solving",
    "Communication Skills",
    "Client Management",
  ],
  authors: [{ name: "Jaya Vishnu" }],
  openGraph: {
    title: "Jaya Vishnu Portfolio",
    description:
      "Claims Processor, Data Analyst, and Business Development Professional based in Coimbatore, India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

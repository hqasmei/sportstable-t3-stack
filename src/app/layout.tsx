import "../styles/globals.css";

import Providers from "../components/Providers";

export const metadata = {
  title: "SportsTable",
  description: "Localized Sports Highlights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

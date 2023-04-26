import Navbar from "~/components/Navbar";

export const metadata = {
  title: "Favorites | SportsTable",
  description: "Favorites page",
};

export default function FavoritesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}

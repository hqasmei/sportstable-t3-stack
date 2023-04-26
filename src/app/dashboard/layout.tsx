import Navbar from "~/components/Navbar";

export const metadata = {
  title: "Dashboard | SportsTable",
  description: "Dashboard page",
};

export default function DashboardLayout({
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

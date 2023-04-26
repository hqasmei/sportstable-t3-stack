export const metadata = {
  title: "SportsTable | Login",
  description: "Localized Sports Highlights",
};

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

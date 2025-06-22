import Footer from "@/components/Footer";

export const metadata = {
  title: "Heikal | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

import Footer from "../common/Footer";
export default function ContentLayout({ children }) {
  return (
    <div className="page-content">
      {children}
      <Footer />
    </div>
  );
}

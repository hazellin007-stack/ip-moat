import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 text-center">
        <p className="font-en text-warm-gray text-sm">English version coming soon.</p>
        <p className="font-en text-warm-gray text-xs mt-2">→ 中文版已完整上線</p>
      </div>
      <Footer />
    </div>
  );
}

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />
      <Skills />
      <Footer />
    </div>
  );
}
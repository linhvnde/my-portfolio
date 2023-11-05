import About from '@/components/About';
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />
      <Navbar />
      {/* Intro */}
      <Intro/>

      {/* About */}
      <About />
      {/* Experience */}

      {/* Skills */}

      {/* Projects */}
    </main>
  );
}

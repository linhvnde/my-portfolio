import About from '@/components/About';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      

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

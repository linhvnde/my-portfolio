import About from '@/components/About';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0 px-4 ">
      

      {/* Intro */}
      <Intro/>

      {/* About */}
      <About />
      {/* Projects */}
      <Projects/>
      {/* Experience */}

      {/* Skills */}

    </main>
  );
}

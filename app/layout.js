  import './globals.css'  
  import Header from '@/components/Header';
  import Navbar from '@/components/Navbar';
  import { Inter } from 'next/font/google'

  const inter = Inter({ subsets: ['latin'] })

  export const metadata = {
    title: 'Linh Nguyen Hoang Portfolio',
    description:
      'Linh Nguyen Hoang is a versatile Full Stack Web Developer bringing over six years of hands-on experience in the e-commerce and fintech sectors. An agile, fast learner and tech enthusiast with a deep understanding of product marketing and a proven ability to adapt in fast-paced, dynamic, multinational environments. Committed to utilizing my proficiency to further polish my skills, while contributing significantly to team success. Actively seeking a challenging web development role in an organization that fosters continuous learning and collaboration, and is dedicated to creating innovative yet user-intuitive products.',
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        >
          <div className="bg-[#fbf0e2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#d7fbed] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-emerald-950"></div>
          <Header />
          <Navbar/>
          {children}
        </body>
      </html>
    );
  }

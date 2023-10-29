import './globals.css'
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}

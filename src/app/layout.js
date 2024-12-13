import "./globals.css";
import {Judson, Risque, RocknRoll_One} from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import Navigation from "./components/navigation";
import Footer from "./components/footer";



export const metadata = {
  title: {
    default: 'Le Petit Croissant',
    template: '%s | Le Petit Croissant',
  }}


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}


const judson = Judson({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-judson',
})

const risque = Risque({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-risque',
})

const rocknRoll = RocknRoll_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rocknroll',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${judson.variable} ${risque.variable} ${rocknRoll.variable}`}>
      <body className='main-container'>
        <header>
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
      <Analytics />
    </html>
  );
}
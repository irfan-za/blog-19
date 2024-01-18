import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Blog',
  description: 'A blog about things',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-100 min-h-dvh flex flex-col justify-between'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

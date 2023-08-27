import './globals.css'
import Navbar from './components/NavBar'

export const metadata = {
  title: 'WikiRocket!',
  description: 'WikiRocket! - using Wiki API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
import './tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const metadata = {
  title: 'Lerian Febriana, A.Md.Kom',
  description: "Hello, I'm Lerian Febriana, A.Md.Kom graduated from Diploma Informatics Management. I'm a Software Developer. I'm interested with Internet of Things.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}

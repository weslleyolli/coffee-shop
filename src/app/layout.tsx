import './globals.css'
import { Roboto_Flex as Roboto} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})

export const metadata = {
  title: 'Coffee Shop',
  description: 'a coffee shop very technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}
      </body>
    </html>
  )
}

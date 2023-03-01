import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['700', '400'],
	variable: '--font-poppins',
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`bg-colors-black ${poppins.className}`}>
				{children}
			</body>
		</html>
	)
}

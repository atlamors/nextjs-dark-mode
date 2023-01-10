/**
 * Import your global css before MyApp
 */
import '../styles/variables.css'
import '../styles/globals.css'

/**
 * Import theme component
 */
import ThemeToggle from '../components/theme.util'

/**
 * Defualt _app.jsx file
 */
export default function MyApp({ Component, pageProps }) {
	return (
		<>
		<ThemeToggle />
		<Component {...pageProps} />
		</>
	)
}
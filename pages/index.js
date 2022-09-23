import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Yoga Sewa API</title>
				<meta name="description" content="API for our sewa on yoga" />
				<link rel="icon" href="./favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://yoga-sewa.pages.dev">YogaSEWA</a> API
				</h1>

				<p className={styles.description}>
					Find the API at{' '}
					<a href='/api/asanas'><code className={styles.code}>/api/asanas</code></a>
				</p>
			</main>

			<footer className={styles.footer}>
				<a>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}

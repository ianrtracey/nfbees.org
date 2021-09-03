import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFBees</title>
        <meta name="description" content="NFBees" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/bee.png" alt="Vercel Logo" height={768} width={768} />

      </main>

      <footer className={styles.footer}>
        Coming Soon 🐝
      </footer>
    </div >
  )
}

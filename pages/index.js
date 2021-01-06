import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        {!session && (
          <div>
            <Button onClick={signIn} variant="contained">
              Connexion
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import {
  signIn,
  signOut,
  useSession,
  getSession,
} from 'next-auth/client';

export default function Home({ sessionSSR }) {
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
        {!session && !loading && (
          <div>
            <Button onClick={signIn} variant="contained">
              Connexion
            </Button>
          </div>
        )}
        {(sessionSSR || session) && (
          <div>
            <Button onClick={signOut} variant="contained">
              Deconnexion
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      sessionSSR: session,
    },
  };
}

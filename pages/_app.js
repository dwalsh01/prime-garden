import Head from 'next/head';
// import '../styles/base.css';
import 'tailwindcss/dist/tailwind.min.css';
import Theme from '../styles/theme/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prime Garden</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

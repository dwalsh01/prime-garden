import Head from 'next/head';
import 'tailwindcss/dist/tailwind.min.css';
import { ApolloProvider } from 'react-apollo';
import { CacheProvider } from '@emotion/react';
import { cache } from 'emotion';
import withData from '../apollo/withData';
import Root from '../components/PageLayout';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <>
      <Head>
        <title>Prime Garden</title>
      </Head>
      <ApolloProvider client={apollo}>
        <Root>
          <CacheProvider value={cache}>
            <Component {...pageProps} />
          </CacheProvider>
        </Root>
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return {
    pageProps,
  };
};

export default withData(MyApp);

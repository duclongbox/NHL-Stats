import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';
import  RouteGuard  from '@/components/RouteGuard';
import '../styles/globals.css';
import { FavoriteTeamsProvider } from '@/components/FavoriteTeamsProvider';

export default function App({ Component, pageProps }) {
  return (
      <>
          <FavoriteTeamsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FavoriteTeamsProvider>
      </>
  );
}



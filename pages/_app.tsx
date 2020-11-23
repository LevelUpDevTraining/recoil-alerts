import '../styles/index.css';
import { RecoilRoot } from 'recoil';
import Alerts from '../components/core/Alerts';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Alerts />
    </RecoilRoot>
  );
}

export default MyApp;

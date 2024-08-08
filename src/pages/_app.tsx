import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../../src/components/redux/game/store/store";
import { ConfigProvider } from "antd";
import theme from '../components/util/themeConfig';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

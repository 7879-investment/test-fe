import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RealtimeProvider } from "../components/UIRealtimeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RealtimeProvider>
      <Component {...pageProps} />
    </RealtimeProvider>
  );
}

export default MyApp;

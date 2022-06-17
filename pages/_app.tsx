import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RealtimeProvider } from "../components/UIRealtimeContext";
import { SWRConfig } from "swr";
import { request } from "graphql-request";

const API_ENDPOINT = "https://morning-dusk-57594.herokuapp.com/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (query: string) => request(API_ENDPOINT, query),
      }}
    >
      <RealtimeProvider>
        <Component {...pageProps} />
      </RealtimeProvider>
    </SWRConfig>
  );
}

export default MyApp;

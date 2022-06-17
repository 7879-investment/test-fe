import { applyPatch } from "fast-json-patch";
import React from "react";
import { IMetalSymbols, IRealtimePrice } from "./types";
import { UIMemoWrapper } from "./UIMemoWrapper";
import useSWR from "swr";

export interface RealtimeProps {
  [IMetalSymbols.GOLD]: IRealtimePrice;
  [IMetalSymbols.PLATINUM]: IRealtimePrice;
  goldPrice: number;
  platinumPrice: number;
}

interface RealtimeProviderProps {
  children: React.ReactNode;
}

const initialContextState: RealtimeProps = {
  [IMetalSymbols.GOLD]: {
    diff: 0,
    value: 48.90807,
  },
  [IMetalSymbols.PLATINUM]: {
    diff: 0,
    value: 25.31755,
  },
  goldPrice: 48.90807,
  platinumPrice: 25.31755,
};

enum XigniteMetalSymbols {
  GOLD = "XAUKG",
  PLATINUM = "XPTKG",
}
interface IXIgnitePrice {
  Spread: number;
  Ask: number;
  Mid: number;
  Bid: number;
  Outcome: string;
  Source: string;
  Time: string;
  Date: string;
  Currency: string;
  QuoteType: string;
  Unit: string;
  Symbol: XigniteMetalSymbols;
  Name: string;
  Identity: null;
  Message: null;
}

type XIgniteEvent = Event & { data: string };

export const RealtimeContext =
  React.createContext<RealtimeProps>(initialContextState);

const PRECISION = 10;

const mapXIgniteToData = (prev: RealtimeProps, data: IXIgnitePrice[]) => {
  const prices = data.reduce((acc, d) => {
    const gram = Math.round(d.Mid * PRECISION) / (PRECISION * 1000);
    return {
      ...acc,
      [d.Symbol.replace("KG", "")]: {
        value: gram,
        diff:
          gram - prev?.[d.Symbol.replace("KG", "") as IMetalSymbols]?.value ||
          0,
      },
    };
  }, {} as RealtimeProps);

  return {
    ...prices,
    goldPrice: prices[IMetalSymbols.GOLD]?.value,
    platinumPrice: prices[IMetalSymbols.PLATINUM]?.value,
  };
};

const findTimestampInPrices = (
  prices: IXIgnitePrice[],
  symbol: XigniteMetalSymbols
) => {
  const symbolUpdate = prices.find((u) => u.Symbol === symbol);
  if (!symbolUpdate) {
    return 0;
  }
  return new Date(`${symbolUpdate.Date} ${symbolUpdate.Time}`).getTime();
};

const streamQuery = `
query {
  streamUrl
}
`;

export const RealtimeProvider = ({ children }: RealtimeProviderProps) => {
  // Need the ref for json patch
  const realtimeData = React.useRef<IXIgnitePrice[]>([]);
  // Count number of updates received (should get one every 1000ms)
  const lastUpdate = React.useRef<number>(0);
  // Need the state for react tree re-rendering
  const [userData, setUserData] =
    React.useState<RealtimeProps>(initialContextState);

  const streamUrl = useSWR(streamQuery);

  React.useEffect(() => {
    let eventSource: EventSource;
    const goLive = async () => {
      const url = streamUrl.data.streamUrl;

      eventSource = new EventSource(url);
      eventSource.addEventListener("open", function () {
        // console.log('connected!')
      });
      eventSource.addEventListener("data", (event) => {
        // memorize the fresh data set
        realtimeData.current = JSON.parse((event as XIgniteEvent).data);
        lastUpdate.current = findTimestampInPrices(
          realtimeData.current,
          XigniteMetalSymbols.GOLD
        );
      });
      // the specific 'patch' event will be called when a fresh Json patch
      // is pushed from the API. This patch has to be applied to the latest data set received.
      eventSource.addEventListener("patch", function (event) {
        // display the patch
        // apply the patch to Json data using json patch API (https://www.npmjs.com/package/fast-json-patch)
        realtimeData.current = applyPatch(
          realtimeData.current,
          JSON.parse((event as XIgniteEvent).data)
        ).newDocument;

        const goldTimestampUpdate = findTimestampInPrices(
          realtimeData.current,
          XigniteMetalSymbols.GOLD
        );

        if (goldTimestampUpdate - lastUpdate.current >= 5000) {
          lastUpdate.current = goldTimestampUpdate;
          setUserData((prev) => mapXIgniteToData(prev, realtimeData.current));
        }

        // do whatever you wish with the update data, like refreshing the UI for instance
      });
      // the standard 'error' callback will be called when an error occurs with the eventSource
      // for example with an invalid token provided
      eventSource.addEventListener("error", (event) => {
        console.log("ERROR:", event);
        // you may decide to close the stream (our choice here) or choose any error handling that suits to your needs.
        eventSource?.close();
        try {
          const error = JSON.parse((event as XIgniteEvent).data);
          console.error(error);
          if (error.status == "2009") {
            // renew your encrypted token here before trying to reconnect
            location.reload();
          }
        } catch (e) {
          console.error(event);
        }
      });
    };
    if (process.browser && streamUrl.data) {
      goLive();
    }
    return () => {
      eventSource?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [streamUrl]);

  return (
    <RealtimeContext.Provider value={userData}>
      <UIMemoWrapper>{children}</UIMemoWrapper>
    </RealtimeContext.Provider>
  );
};

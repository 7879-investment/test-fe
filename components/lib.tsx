import { applyPatch } from "fast-json-patch";

export enum IMetalSymbols {
  GOLD = "XAU",
  PLATINUM = "XPT",
}

export interface IRealtimePrice {
  value: number;
  diff: number;
}

export interface RealtimeProps {
  [IMetalSymbols.GOLD]: IRealtimePrice;
  [IMetalSymbols.PLATINUM]: IRealtimePrice;
  goldPrice: number;
  platinumPrice: number;
}

export enum IMetal {
  Gold = "gold",
  Platinum = "platinum",
}

export interface IRealtimePrice {
  value: number;
  diff: number;
}

export interface IItem {
  image: string;
  sku: string;
  name: string;
  purchasePrice: number;
  weight: number;
  metal: "gold" | "platinum";
}

export interface IPortfolio {
  id: string;
  currentBalance: {
    goldBalance: number;
    platinumBalance: number;
  };
  history: {
    date: string;
    goldValue: {
      currency: string;
      amount: number;
    };
    platinumValue: {
      currency: string;
      amount: number;
    };
    totalValue: {
      currency: string;
      amount: number;
    };
  }[];
  portfolioItems: IItem[];
}

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

let realtimeData: IXIgnitePrice[] = [];
// Count number of updates received (should get one every 1000ms)
let lastUpdate: number = 0;
let data: RealtimeProps = {
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

export const subscribeToUpdates = async (streamUrl: string) => {
  const url = streamUrl;
  let eventSource: EventSource;

  eventSource = new EventSource(url);
  eventSource.addEventListener("open", function () {
    // console.log('connected!')
  });
  eventSource.addEventListener("data", (event) => {
    // memorize the fresh data set
    realtimeData = JSON.parse((event as XIgniteEvent).data);
    lastUpdate = findTimestampInPrices(realtimeData, XigniteMetalSymbols.GOLD);
  });
  // the specific 'patch' event will be called when a fresh Json patch
  // is pushed from the API. This patch has to be applied to the latest data set received.
  eventSource.addEventListener("patch", function (event) {
    // display the patch
    // apply the patch to Json data using json patch API (https://www.npmjs.com/package/fast-json-patch)
    realtimeData = applyPatch(
      realtimeData,
      JSON.parse((event as XIgniteEvent).data)
    ).newDocument;

    const goldTimestampUpdate = findTimestampInPrices(
      realtimeData,
      XigniteMetalSymbols.GOLD
    );

    if (goldTimestampUpdate - lastUpdate >= 5000) {
      lastUpdate = goldTimestampUpdate;
      data = mapXIgniteToData(data, realtimeData);
      console.log(data);
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

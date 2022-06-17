import type { NextPage } from "next";
import Head from "next/head";
import { UIHeader } from "./components/UIHeader";
import { UITop } from "./components/UITop";
import dynamic from "next/dynamic";
import { UIValues } from "./components/UIValues";
import { Item, UIItems } from "./components/UIItems";
import { UIFooter } from "./components/UIFooter";

const items: Item[] = [
  {
    currentPrice: 150.34,
    purchasePrice: 203.73,
    sku: "ss21-b05-7.5-g",
    metal: "gold",
    name: "Key Pendant",
    weight: 2.3,
    image: "https://7879.co/api/images-v/ss21-b05-7.5-g?w=100&q=75",
  },
  {
    currentPrice: 161.48,
    purchasePrice: 123.15,
    sku: "ss21-b06-6.5-p",
    metal: "platinum",
    name: "Diamond Cut Curb Chain Bracelet",
    weight: 3.42,
    image: "https://7879.co/api/images-v/ss21-b06-6.5-p?w=100&q=75",
  },
  {
    currentPrice: 1010.34,
    purchasePrice: 1212.16,
    sku: "ss21-r10-3-g",
    metal: "gold",
    name: "Liquid Metal Signet Ring",
    weight: 15.2,
    image: "https://7879.co/api/images-v/ss21-r10-3-g?w=100&q=75",
  },
];

const Chart = dynamic(() => import("./components/UIChart"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>7879</title>
        <meta name="description" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UIHeader />

      <main>
        <UITop />
        <Chart />
        <div className="p-6">
          <UIValues />
        </div>
        <UIItems items={items} />
        <UIFooter />
      </main>
    </div>
  );
};

export default Home;

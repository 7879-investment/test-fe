import type { NextPage } from "next";
import Head from "next/head";
import { UIHeader } from "../components/UIHeader";
import { UITop } from "../components/UITop";
import dynamic from "next/dynamic";
import { UIValues } from "../components/UIValues";
import { UIItems } from "../components/UIItems";
import { UIFooter } from "../components/UIFooter";
import useSWR from "swr";

const Chart = dynamic(() => import("../components/UIChart"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const portfolioQuery = `{
  portfolio {
    id
    currentBalance {
      goldBalance
      platinumBalance
    }
    history {
      date
      totalValue {
        currency
        amount
      }
    }
    portfolioItems {
      image
      sku
      name
      purchasePrice
      weight
      metal
    }
  }
}`;

const Home: NextPage = () => {
  const portfolioResult = useSWR(portfolioQuery);
  return (
    <div>
      <Head>
        <title>7879</title>
        <meta name="description" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UIHeader />

      {portfolioResult.data && (
        <main>
          <UITop />
          <Chart portfolio={portfolioResult.data.portfolio} />
          <div className="p-6">
            <UIValues portfolio={portfolioResult.data.portfolio} />
          </div>
          <UIItems items={portfolioResult.data.portfolio.portfolioItems} />
          <UIFooter />
        </main>
      )}
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { UIHeader } from "../components/UIHeader";
import { UITop } from "../components/UITop";
import dynamic from "next/dynamic";
import { UIValues } from "../components/UIValues";
import { UIItems } from "../components/UIItems";
import { UIFooter } from "../components/UIFooter";
import { portfolio } from "../components/data";

const Chart = dynamic(() => import("../components/UIChart"), {
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
        <Chart portfolio={portfolio} />
        <div className="p-6">
          <UIValues portfolio={portfolio} />
        </div>
        <UIItems items={portfolio.portfolioItems} />
        <UIFooter />
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
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

const streamQuery = `
  query {
    streamUrl
  }
`;

const Home: NextPage = () => {
  const portfolioResult = useSWR(portfolioQuery);
  const streamUrl = useSWR(streamQuery);
  return (
    <div>
      <Head>
        <title>7879</title>
        <meta name="description" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>7879</div>
        <div>Gold Price</div>
        <div>Platinum Price</div>
      </header>

      <main>
        <div>My Investments</div>
        <div>
          Paragraph about your portfolio, what you can see, why it is useful and
          how it works so they know exactly what it is before they scroll.
          Paragraph about your portfolio, what you can see, why it is useful and
          how it works so they know exactly what it is before they scroll.
        </div>
        {portfolioResult.data && streamUrl.data && (
          <Chart
            portfolio={portfolioResult.data.portfolio}
            streamUrl={streamUrl.data.streamUrl}
          />
        )}
        <div>
          <div>Value change</div>
          <div>£ 124</div>
          <div>Gold value</div>
          <div>£ 839</div>
          <div>Platinum value</div>
          <div>£ 83</div>
        </div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </main>
      <footer>
        <div>THE MINE</div>
        <div>How our jewellery is made</div>
        <div>
          Suscipit ut faucibus habitant scelerisque feugiat. Feugiat id massa
          sapien lacus, praesent. Et lectus neque, sed egestas nisl, faucibus
          urna vulputate. Curabitur nunc eu rhoncus, tempor tincidunt.
        </div>
        <div>Explore more</div>
      </footer>
    </div>
  );
};

export default Home;

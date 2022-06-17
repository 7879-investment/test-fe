import type { NextPage } from "next";
import Head from "next/head";

//TODO: Get dynamically from https://morning-dusk-57594.herokuapp.com/
const portfolio = {
  id: "a03536ab-9c13-41b1-8094-269dc6fe55c7",
  currentBalance: {
    goldBalance: 17.5,
    platinumBalance: 3.42,
  },
  history: [
    {
      date: "2022-02-09",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-10",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-11",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-12",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-13",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-14",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-15",
      totalValue: {
        currency: "GBP",
        amount: 0,
      },
    },
    {
      date: "2022-02-16",
      totalValue: {
        currency: "GBP",
        amount: 43.420839400000006,
      },
    },
    {
      date: "2022-02-17",
      totalValue: {
        currency: "GBP",
        amount: 44.6653976,
      },
    },
    {
      date: "2022-02-18",
      totalValue: {
        currency: "GBP",
        amount: 69.1519053,
      },
    },
    {
      date: "2022-02-19",
      totalValue: {
        currency: "GBP",
        amount: 67.6289907,
      },
    },
    {
      date: "2022-02-20",
      totalValue: {
        currency: "GBP",
        amount: 67.6289907,
      },
    },
    {
      date: "2022-02-21",
      totalValue: {
        currency: "GBP",
        amount: 68.2194078,
      },
    },
    {
      date: "2022-02-22",
      totalValue: {
        currency: "GBP",
        amount: 68.62257779999999,
      },
    },
    {
      date: "2022-02-23",
      totalValue: {
        currency: "GBP",
        amount: 68.2254954,
      },
    },
    {
      date: "2022-02-24",
      totalValue: {
        currency: "GBP",
        amount: 322.28015000000005,
      },
    },
    {
      date: "2022-02-25",
      totalValue: {
        currency: "GBP",
        amount: 322.3665343,
      },
    },
    {
      date: "2022-02-26",
      totalValue: {
        currency: "GBP",
        amount: 319.08053770000004,
      },
    },
    {
      date: "2022-02-27",
      totalValue: {
        currency: "GBP",
        amount: 319.08053770000004,
      },
    },
    {
      date: "2022-02-28",
      totalValue: {
        currency: "GBP",
        amount: 322.8632878,
      },
    },
    {
      date: "2022-03-01",
      totalValue: {
        currency: "GBP",
        amount: 319.55255150000005,
      },
    },
    {
      date: "2022-03-02",
      totalValue: {
        currency: "GBP",
        amount: 327.16366320000003,
      },
    },
    {
      date: "2022-03-03",
      totalValue: {
        currency: "GBP",
        amount: 325.3779108,
      },
    },
    {
      date: "2022-03-04",
      totalValue: {
        currency: "GBP",
        amount: 328.19842450000004,
      },
    },
    {
      date: "2022-03-05",
      totalValue: {
        currency: "GBP",
        amount: 339.9004678,
      },
    },
    {
      date: "2022-03-06",
      totalValue: {
        currency: "GBP",
        amount: 339.9004678,
      },
    },
    {
      date: "2022-03-07",
      totalValue: {
        currency: "GBP",
        amount: 344.9032894,
      },
    },
    {
      date: "2022-03-08",
      totalValue: {
        currency: "GBP",
        amount: 346.6968604,
      },
    },
    {
      date: "2022-03-09",
      totalValue: {
        currency: "GBP",
        amount: 355.50950710000006,
      },
    },
    {
      date: "2022-03-10",
      totalValue: {
        currency: "GBP",
        amount: 338.9468784,
      },
    },
    {
      date: "2022-03-11",
      totalValue: {
        currency: "GBP",
        amount: 339.9557092,
      },
    },
    {
      date: "2022-03-12",
      totalValue: {
        currency: "GBP",
        amount: 341.7409764,
      },
    },
    {
      date: "2022-03-13",
      totalValue: {
        currency: "GBP",
        amount: 341.7409764,
      },
    },
    {
      date: "2022-03-14",
      totalValue: {
        currency: "GBP",
        amount: 338.13565800000003,
      },
    },
    {
      date: "2022-03-15",
      totalValue: {
        currency: "GBP",
        amount: 333.23113839999996,
      },
    },
    {
      date: "2022-03-16",
      totalValue: {
        currency: "GBP",
        amount: 323.7177702,
      },
    },
    {
      date: "2022-03-17",
      totalValue: {
        currency: "GBP",
        amount: 326.394605,
      },
    },
    {
      date: "2022-03-18",
      totalValue: {
        currency: "GBP",
        amount: 328.0738306,
      },
    },
    {
      date: "2022-03-19",
      totalValue: {
        currency: "GBP",
        amount: 324.7984629,
      },
    },
    {
      date: "2022-03-20",
      totalValue: {
        currency: "GBP",
        amount: 324.7984629,
      },
    },
    {
      date: "2022-03-21",
      totalValue: {
        currency: "GBP",
        amount: 325.21211100000005,
      },
    },
    {
      date: "2022-03-22",
      totalValue: {
        currency: "GBP",
        amount: 328.3582541,
      },
    },
    {
      date: "2022-03-23",
      totalValue: {
        currency: "GBP",
        amount: 322.4348649,
      },
    },
    {
      date: "2022-03-24",
      totalValue: {
        currency: "GBP",
        amount: 326.9611104,
      },
    },
    {
      date: "2022-03-25",
      totalValue: {
        currency: "GBP",
        amount: 328.9345847,
      },
    },
    {
      date: "2022-03-26",
      totalValue: {
        currency: "GBP",
        amount: 326.34847990000003,
      },
    },
    {
      date: "2022-03-27",
      totalValue: {
        currency: "GBP",
        amount: 326.34847990000003,
      },
    },
    {
      date: "2022-03-28",
      totalValue: {
        currency: "GBP",
        amount: 326.62325050000004,
      },
    },
    {
      date: "2022-03-29",
      totalValue: {
        currency: "GBP",
        amount: 322.67406170000004,
      },
    },
    {
      date: "2022-03-30",
      totalValue: {
        currency: "GBP",
        amount: 322.6789893,
      },
    },
    {
      date: "2022-03-31",
      totalValue: {
        currency: "GBP",
        amount: 323.77324400000003,
      },
    },
    {
      date: "2022-04-01",
      totalValue: {
        currency: "GBP",
        amount: 322.85919670000004,
      },
    },
    {
      date: "2022-04-02",
      totalValue: {
        currency: "GBP",
        amount: 322.8881675,
      },
    },
    {
      date: "2022-04-03",
      totalValue: {
        currency: "GBP",
        amount: 322.8881675,
      },
    },
    {
      date: "2022-04-04",
      totalValue: {
        currency: "GBP",
        amount: 322.70102710000003,
      },
    },
    {
      date: "2022-04-05",
      totalValue: {
        currency: "GBP",
        amount: 324.02639550000004,
      },
    },
    {
      date: "2022-04-06",
      totalValue: {
        currency: "GBP",
        amount: 321.6383214,
      },
    },
    {
      date: "2022-04-07",
      totalValue: {
        currency: "GBP",
        amount: 320.5104612,
      },
    },
    {
      date: "2022-04-08",
      totalValue: {
        currency: "GBP",
        amount: 322.1557974,
      },
    },
    {
      date: "2022-04-09",
      totalValue: {
        currency: "GBP",
        amount: 326.13483510000003,
      },
    },
    {
      date: "2022-04-10",
      totalValue: {
        currency: "GBP",
        amount: 326.13483510000003,
      },
    },
    {
      date: "2022-04-11",
      totalValue: {
        currency: "GBP",
        amount: 326.49691,
      },
    },
    {
      date: "2022-04-12",
      totalValue: {
        currency: "GBP",
        amount: 327.344158,
      },
    },
    {
      date: "2022-04-13",
      totalValue: {
        currency: "GBP",
        amount: 328.4862171,
      },
    },
    {
      date: "2022-04-14",
      totalValue: {
        currency: "GBP",
        amount: 328.9855867,
      },
    },
    {
      date: "2022-04-15",
      totalValue: {
        currency: "GBP",
        amount: 329.8431408,
      },
    },
    {
      date: "2022-04-16",
      totalValue: {
        currency: "GBP",
        amount: 329.9536408,
      },
    },
    {
      date: "2022-04-17",
      totalValue: {
        currency: "GBP",
        amount: 329.9536408,
      },
    },
    {
      date: "2022-04-18",
      totalValue: {
        currency: "GBP",
        amount: 353.4273902,
      },
    },
    {
      date: "2022-04-19",
      totalValue: {
        currency: "GBP",
        amount: 378.8638122,
      },
    },
    {
      date: "2022-04-20",
      totalValue: {
        currency: "GBP",
        amount: 372.4580853,
      },
    },
    {
      date: "2022-04-21",
      totalValue: {
        currency: "GBP",
        amount: 370.48991520000004,
      },
    },
    {
      date: "2022-04-22",
      totalValue: {
        currency: "GBP",
        amount: 368.5744508,
      },
    },
    {
      date: "2022-04-23",
      totalValue: {
        currency: "GBP",
        amount: 365.9515735,
      },
    },
    {
      date: "2022-04-24",
      totalValue: {
        currency: "GBP",
        amount: 365.9515735,
      },
    },
    {
      date: "2022-04-25",
      totalValue: {
        currency: "GBP",
        amount: 365.9127269,
      },
    },
    {
      date: "2022-04-26",
      totalValue: {
        currency: "GBP",
        amount: 363.9253906,
      },
    },
    {
      date: "2022-04-27",
      totalValue: {
        currency: "GBP",
        amount: 369.1062753,
      },
    },
    {
      date: "2022-04-28",
      totalValue: {
        currency: "GBP",
        amount: 367.3270394,
      },
    },
    {
      date: "2022-04-29",
      totalValue: {
        currency: "GBP",
        amount: 370.40578089999997,
      },
    },
    {
      date: "2022-04-30",
      totalValue: {
        currency: "GBP",
        amount: 370.4716734,
      },
    },
    {
      date: "2022-05-01",
      totalValue: {
        currency: "GBP",
        amount: 370.4716734,
      },
    },
    {
      date: "2022-05-02",
      totalValue: {
        currency: "GBP",
        amount: 370.8366503,
      },
    },
    {
      date: "2022-05-03",
      totalValue: {
        currency: "GBP",
        amount: 369.1248429,
      },
    },
    {
      date: "2022-05-04",
      totalValue: {
        currency: "GBP",
        amount: 374.0041724,
      },
    },
    {
      date: "2022-05-05",
      totalValue: {
        currency: "GBP",
        amount: 377.1070538,
      },
    },
    {
      date: "2022-05-06",
      totalValue: {
        currency: "GBP",
        amount: 381.9165743,
      },
    },
    {
      date: "2022-05-07",
      totalValue: {
        currency: "GBP",
        amount: 379.7481596,
      },
    },
    {
      date: "2022-05-08",
      totalValue: {
        currency: "GBP",
        amount: 379.7481596,
      },
    },
    {
      date: "2022-05-09",
      totalValue: {
        currency: "GBP",
        amount: 379.39340649999997,
      },
    },
    {
      date: "2022-05-10",
      totalValue: {
        currency: "GBP",
        amount: 375.886006,
      },
    },
    {
      date: "2022-05-11",
      totalValue: {
        currency: "GBP",
        amount: 376.0981746,
      },
    },
    {
      date: "2022-05-12",
      totalValue: {
        currency: "GBP",
        amount: 384.09138959999996,
      },
    },
    {
      date: "2022-05-13",
      totalValue: {
        currency: "GBP",
        amount: 374.3046562,
      },
    },
    {
      date: "2022-05-14",
      totalValue: {
        currency: "GBP",
        amount: 370.7808937,
      },
    },
    {
      date: "2022-05-15",
      totalValue: {
        currency: "GBP",
        amount: 370.7808937,
      },
    },
    {
      date: "2022-05-16",
      totalValue: {
        currency: "GBP",
        amount: 393.0467032,
      },
    },
    {
      date: "2022-05-17",
      totalValue: {
        currency: "GBP",
        amount: 392.9949056,
      },
    },
    {
      date: "2022-05-18",
      totalValue: {
        currency: "GBP",
        amount: 387.32878330000005,
      },
    },
    {
      date: "2022-05-19",
      totalValue: {
        currency: "GBP",
        amount: 389.4921932,
      },
    },
    {
      date: "2022-05-20",
      totalValue: {
        currency: "GBP",
        amount: 393.426222,
      },
    },
    {
      date: "2022-05-21",
      totalValue: {
        currency: "GBP",
        amount: 391.88968,
      },
    },
    {
      date: "2022-05-22",
      totalValue: {
        currency: "GBP",
        amount: 391.88968,
      },
    },
    {
      date: "2022-05-23",
      totalValue: {
        currency: "GBP",
        amount: 391.73505220000004,
      },
    },
    {
      date: "2022-05-24",
      totalValue: {
        currency: "GBP",
        amount: 390.02892479999997,
      },
    },
    {
      date: "2022-05-25",
      totalValue: {
        currency: "GBP",
        amount: 392.8217783,
      },
    },
    {
      date: "2022-05-26",
      totalValue: {
        currency: "GBP",
        amount: 388.6489547,
      },
    },
    {
      date: "2022-05-27",
      totalValue: {
        currency: "GBP",
        amount: 388.4702723,
      },
    },
    {
      date: "2022-05-28",
      totalValue: {
        currency: "GBP",
        amount: 388.3131766,
      },
    },
    {
      date: "2022-05-29",
      totalValue: {
        currency: "GBP",
        amount: 388.3131766,
      },
    },
    {
      date: "2022-05-30",
      totalValue: {
        currency: "GBP",
        amount: 388.3660136,
      },
    },
    {
      date: "2022-05-31",
      totalValue: {
        currency: "GBP",
        amount: 388.37077480000005,
      },
    },
    {
      date: "2022-06-01",
      totalValue: {
        currency: "GBP",
        amount: 389.7470666,
      },
    },
    {
      date: "2022-06-02",
      totalValue: {
        currency: "GBP",
        amount: 399.407235,
      },
    },
    {
      date: "2022-06-03",
      totalValue: {
        currency: "GBP",
        amount: 403.9828887,
      },
    },
    {
      date: "2022-06-04",
      totalValue: {
        currency: "GBP",
        amount: 403.7115024,
      },
    },
    {
      date: "2022-06-05",
      totalValue: {
        currency: "GBP",
        amount: 403.7115024,
      },
    },
    {
      date: "2022-06-06",
      totalValue: {
        currency: "GBP",
        amount: 403.3178622,
      },
    },
    {
      date: "2022-06-07",
      totalValue: {
        currency: "GBP",
        amount: 402.0621687,
      },
    },
    {
      date: "2022-06-08",
      totalValue: {
        currency: "GBP",
        amount: 399.8653902,
      },
    },
    {
      date: "2022-06-09",
      totalValue: {
        currency: "GBP",
        amount: 400.7576093,
      },
    },
    {
      date: "2022-06-10",
      totalValue: {
        currency: "GBP",
        amount: 394.5833067,
      },
    },
    {
      date: "2022-06-11",
      totalValue: {
        currency: "GBP",
        amount: 404.3909271,
      },
    },
    {
      date: "2022-06-12",
      totalValue: {
        currency: "GBP",
        amount: 404.3909271,
      },
    },
    {
      date: "2022-06-13",
      totalValue: {
        currency: "GBP",
        amount: 405.029893,
      },
    },
    {
      date: "2022-06-14",
      totalValue: {
        currency: "GBP",
        amount: 396.76628339999996,
      },
    },
    {
      date: "2022-06-15",
      totalValue: {
        currency: "GBP",
        amount: 397.0174396,
      },
    },
    {
      date: "2022-06-16",
      totalValue: {
        currency: "GBP",
        amount: 398.4716601,
      },
    },
    {
      date: "2022-06-17",
      totalValue: {
        currency: "GBP",
        amount: 396.0216981,
      },
    },
  ],
  portfolioItems: [
    {
      image: "https://7879.co/api/images-v/ss21-b05-7.5-g?w=100&q=75",
      sku: "ss21-b05-7.5-g",
      name: "Key Pendant",
      purchasePrice: 123.73,
      weight: 2.3,
      metal: "gold",
    },
    {
      image: "https://7879.co/api/images-v/ss21-b06-6.5-p?w=100&q=75",
      sku: "ss21-b06-6.5-p",
      name: "Diamond Cut Curb Chain Bracelet",
      purchasePrice: 63.15,
      weight: 3.42,
      metal: "platinum",
    },
    {
      image: "https://7879.co/api/images-v/ss21-r10-3-g?w=100&q=75",
      sku: "ss21-r10-3-g",
      name: "Liquid Metal Signet Ring",
      purchasePrice: 612.16,
      weight: 15.2,
      metal: "gold",
    },
  ],
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>7879</title>
        <meta name="description" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;

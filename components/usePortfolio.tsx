import React from "react";
import { IPortfolio } from "./types";
import { RealtimeContext } from "./UIRealtimeContext";

export const usePortfolio = (portfolio: IPortfolio) => {
  const { goldPrice, platinumPrice } = React.useContext(RealtimeContext);
  const prices = React.useMemo(() => {
    const original = portfolio.portfolioItems.reduce(
      (acc, i) => acc + i.purchasePrice,
      0
    );
    const goldValue = portfolio.currentBalance.goldBalance * goldPrice;
    const platinumValue =
      portfolio.currentBalance.platinumBalance * platinumPrice;
    const diff = goldValue + platinumValue - original;
    const totalValue = goldValue + platinumValue;

    return { original, goldValue, platinumValue, diff, totalValue };
  }, [portfolio, goldPrice, platinumPrice]);

  return prices;
};

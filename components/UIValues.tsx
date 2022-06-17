import React from "react";
import { IPortfolio } from "./types";
import { UITagBig } from "./UITagBig";
import { usePortfolio } from "./usePortfolio";

export const UIValues = (props: { portfolio: IPortfolio }) => {
  const prices = usePortfolio(props.portfolio);

  return (
    <div className="flex items-center justify-center gap-6 flex-col w-full sm:flex-row">
      <UITagBig color="saphire" label="Value change" value={prices.diff} />
      <UITagBig color="gold" label="Gold value" value={prices.goldValue} />
      <UITagBig
        color="platinum"
        label="Platinum value"
        value={prices.platinumValue}
      />
    </div>
  );
};

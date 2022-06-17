import Image from "next/image";
import React from "react";
import { IItem } from "./types";
import { UIPrice } from "./UIPrice";
import { RealtimeContext } from "./UIRealtimeContext";
import { UITag } from "./UITag";

export const UIItems = (props: { items: IItem[] }) => {
  const { goldPrice, platinumPrice } = React.useContext(RealtimeContext);
  return (
    <div className="bg-platinum-1 sm:p-20">
      <div className="flex flex-col bg-white sm:px-20">
        {props.items.map((i) => {
          const currentPrice =
            i.metal === "gold"
              ? i.weight * goldPrice
              : i.weight * platinumPrice;
          return (
            <div
              key={i.sku}
              className="flex justify-between border-b border-b-platinum-1 gap-6  flex-col sm:flex-row"
            >
              <div className="flex flex-1 ">
                <div className="flex-shrink-0">
                  <Image src={i.image} width={100} height={100} alt="logo" />
                </div>
                <div className="flex flex-col p-4 gap-1">
                  <div className="bg-black w-4 h-4 flex items-center justify-center text-white">
                    P
                  </div>
                  <span>{i.name}</span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-4 gap-1">
                <UIPrice price={i.purchasePrice} />
                <UITag value={i.weight} color={i.metal} label={i.metal} />
              </div>
              <div className="flex flex-col flex-1 p-4 gap-1">
                <UIPrice price={currentPrice} />
                <UIPrice
                  price={currentPrice - i.purchasePrice}
                  direction={currentPrice - i.purchasePrice > 0 ? "up" : "down"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

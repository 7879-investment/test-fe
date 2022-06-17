import Image from "next/image";
import { UIPrice } from "./UIPrice";
import { UITag } from "./UITag";

export interface Item {
  image: string;
  sku: string;
  name: string;
  purchasePrice: number;
  currentPrice: number;
  weight: number;
  metal: "gold" | "platinum";
}

export const UIItems = (props: { items: Item[] }) => {
  return (
    <div className="bg-platinum-1 p-20">
      <div className="flex flex-col bg-white px-20">
        {props.items.map((i) => {
          return (
            <div
              key={i.sku}
              className="flex justify-between border-b border-b-platinum-1 gap-6 "
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
                <UIPrice price={i.currentPrice} direction="down" />
                <UIPrice
                  price={i.currentPrice - i.purchasePrice}
                  direction="up"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

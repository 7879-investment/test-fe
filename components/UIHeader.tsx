import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RealtimeContext } from "./UIRealtimeContext";
import { UITag } from "./UITag";

export const UIHeader = () => {
  const { goldPrice, platinumPrice } = React.useContext(RealtimeContext);
  return (
    <header className="w-full flex items-center justify-between px-12 flex-col py-4 sm:py-0 sm:flex-row sm:h-20 ">
      <Link href="https://7879.co">
        <a target={"_blank"}>
          <Image
            className="flex-0"
            src="/logo.svg"
            alt="7879 Logo"
            width={78}
            height={40}
          />
        </a>
      </Link>
      <div className="flex gap-2">
        <UITag value={goldPrice} label="Platinum" color="platinum" />
        <UITag value={platinumPrice} label="Gold" color="gold" />
      </div>
    </header>
  );
};

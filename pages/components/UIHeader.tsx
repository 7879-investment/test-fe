import Image from "next/image";
import Link from "next/link";
import { UITag } from "./UITag";

export const UIHeader = () => {
  return (
    <header className="h-20 w-full flex items-center justify-between px-12">
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
        <UITag value={100} label="Platinum" color="platinum" />
        <UITag value={100} label="Gold" color="gold" />
      </div>
    </header>
  );
};

import Image from "next/image";
import Link from "next/link";
import bottomPic from "../../public/bottom.png";

export const UIFooter = () => {
  return (
    <div className="flex bg-cream">
      <div className="flex-1">
        <Image src={bottomPic} alt="img" objectFit="cover" />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-10 px-20">
        <span className="text-xs">THE MINE</span>
        <h2 className="text-3xl">How our jewellery is made</h2>
        <p>
          Suscipit ut faucibus habitant scelerisque feugiat. Feugiat id massa
          sapien lacus, praesent. Et lectus neque, sed egestas nisl, faucibus
          urna vulputate. Curabitur nunc eu rhoncus, tempor tincidunt.
        </p>
        <Link href="https://7879.co">
          <a className="bg-black text-white p-2 w-min" target={"_blank"}>
            <div className="flex items-center justify-center min-w-[140px]">
              Explore more &rarr;
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

import Image from "next/image";
import topPic from "../../public/top.png";

export const UITop = () => {
  return (
    <div className="h-[480px] w-full flex gap-6 p-12 bg-cream">
      <div>
        <h1 className="text-3xl">My Investments</h1>
        <p className="mt-6 text-lg">
          Paragraph about your portfolio, what you can see, why it is useful and
          how it works so they know exactly what it is before they scroll.
          Paragraph about your portfolio, what you can see, why it is useful and
          how it works so they know exactly what it is before they scroll.
        </p>
      </div>
      <Image src={topPic} alt="img" objectFit="contain" />
    </div>
  );
};

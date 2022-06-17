import { UIPrice } from "./UIPrice";

export const UITagBig = (props: {
  label: string;
  value: number;
  color: "gold" | "platinum" | "saphire";
}) => {
  return (
    <div className={`flex items-center h-12`}>
      <div
        className={`px-2 h-full flex items-center justify-center ${
          props.color === "saphire"
            ? "bg-saphire-18"
            : props.color === "gold"
            ? "bg-gold-18"
            : "bg-platinum-18"
        }`}
      >
        {props.label}
      </div>
      <div
        className={`px-2 min-w-[160px] h-full flex items-center  justify-center ${
          props.color === "saphire"
            ? "bg-saphire-9"
            : props.color === "gold"
            ? "bg-gold-9"
            : "bg-platinum-9"
        }`}
      >
        <UIPrice price={props.value} />
      </div>
    </div>
  );
};

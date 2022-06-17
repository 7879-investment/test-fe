export const UITag = (props: {
  label: string;
  value: number;
  color: "gold" | "platinum";
}) => {
  return (
    <div
      className={`flex border w-min ${
        props.color === "gold" ? "border-gold-18" : "border-platinum-18"
      }`}
    >
      <div
        className={`px-2 ${
          props.color === "gold" ? "bg-gold-18" : "bg-platinum-18"
        }`}
      >
        {props.label}
      </div>
      <div className="h-6 px-2">{props.value}</div>
    </div>
  );
};

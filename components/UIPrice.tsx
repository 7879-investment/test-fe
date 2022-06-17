export const UIPrice = (props: {
  price: number;
  direction?: "up" | "down";
}) => {
  return (
    <>
      <span
        className={`${
          props.direction &&
          (props.direction === "up" ? "text-green-400" : "text-red-400")
        }`}
      >
        {props.direction === "up" && <span>&uarr;</span>}
        {props.direction === "down" && <span>&darr;</span>} £{" "}
        {props.price.toFixed(2)}
      </span>
    </>
  );
};

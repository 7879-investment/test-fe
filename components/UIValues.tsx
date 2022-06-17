import { UITagBig } from "./UITagBig";

export const UIValues = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <UITagBig color="saphire" label="Value change" value={143.31} />
      <UITagBig color="gold" label="Gold value" value={143.31} />
      <UITagBig color="platinum" label="Platinum value" value={143.31} />
    </div>
  );
};

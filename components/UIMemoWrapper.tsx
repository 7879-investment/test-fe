import React, { memo } from "react";

// eslint-disable-next-line react/display-name
export const UIMemoWrapper = memo((props: { children: React.ReactNode }) => (
  <>{props.children}</>
));

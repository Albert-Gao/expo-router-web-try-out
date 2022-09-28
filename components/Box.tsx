import { createBox } from "@shopify/restyle";
import { ComponentProps } from "react";
import { Theme } from "./ThemeProvider";

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;

import { createText } from "@shopify/restyle";
import type { ComponentProps } from "react";
import { Theme } from "./ThemeProvider";

export const Text = createText<Theme>();
export type TextProps = ComponentProps<typeof Text>;

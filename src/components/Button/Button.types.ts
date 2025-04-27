import React from "react";
import { VariantProps } from "tailwind-variants";
import button from "./Button.styles";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {
    isLoading?: boolean;
}

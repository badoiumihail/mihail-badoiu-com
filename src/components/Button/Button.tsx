import { ButtonProps } from "./Button.types";
import { cn } from "../../lib/utils";
import button from "./Button.styles";

export default function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled || isLoading}
            className={cn(
                button({ variant, size, disabled: disabled || isLoading }),
                className,
            )}
            {...props}
        >
            {isLoading ? (
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : null}
            {children}
        </button>
    );
}

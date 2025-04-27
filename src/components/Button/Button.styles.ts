import { tv } from "tailwind-variants";

const button = tv({
    base: "font-bold rounded transition-all duration-150 flex items-center justify-center",
    variants: {
        variant: {
            primary: "bg-blue-600 text-white hover:bg-blue-500",
            secondary: "bg-gray-600 text-white hover:bg-gray-500",
            danger: "bg-red-600 text-white hover:bg-red-500",
            warning: "bg-yellow-400 text-black hover:bg-yellow-300",
            ghost: "bg-transparent hover:bg-gray-100 text-black border",
        },
        size: {
            sm: "px-3 py-1 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        },
        disabled: {
            true: "opacity-50 cursor-not-allowed",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export default button;

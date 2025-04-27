import classNames from "classnames";
import React from "react";

type NavBarProps = { children: React.ReactNode; className: string };

export default function NavBar({ children, className, ...rest }: NavBarProps) {
    const baseClasses = "flex";
    const classes = classNames(baseClasses, className);

    return (
        <nav className={classes} {...rest}>
            {children}
        </nav>
    );
}
